import {setIntervalConditionPromise} from '../tools/set_intervalx';
import TelemetryAPI from '../API/telemetryAPI';
import BoosterStatus from "./BoosterStatus"
import BoosterData from "./BoosterData";
import MissionAPI from "../API/MissionAPI";
import Consumer from '../consumer';
import Producer from '../producer/index';


export default class Booster {

    boosterData: BoosterData;

    private telemetryAPI: TelemetryAPI = new TelemetryAPI();
    public dataUpdateDelay = 3000;
    private missionAPI = new MissionAPI();
    private boosterDrained = false;
    private rocketBusConsumer: Consumer;
    private rocketBusProducer: Producer;

    constructor(boosterData: BoosterData) {
        this.boosterData = boosterData;
        this.rocketBusProducer = new Producer(boosterData.missionId);
        this.rocketBusConsumer = new Consumer(boosterData.missionId);
        this.rocketBusConsumer.run('rocket-' + this.boosterData.missionId + '-booster', (value: Object) => {
            this.triggerActionWhenReceiveBusSignal(value);
        });
    }

    private triggerActionWhenReceiveBusSignal(signal: any) {
        if (signal.action == 'launchBooster') {
            this.launch();
        } else if (signal.action == 'updateDataFromHeadStageData' && this.boosterData.boosterStatus === BoosterStatus.ON_THE_ROCKET) {
            this.boosterData.altitude = signal.headStageTelemetryData.altitude;
            this.boosterData.speed = signal.headStageTelemetryData.speed;
            this.sendData();
        } else if (signal.action == "notifyOfHeadDestruction") {
            this.destroy();
        }
    }

    sendData(): void {
        if (process.env.NODE_ENV != 'test') {
            this.telemetryAPI.sendBoosterData(this.boosterData);
            this.missionAPI.sendBoosterData(this.boosterData.boosterStatus, this.boosterData.missionId);
        }
    }


    getBoosterData(): BoosterData {
        return this.boosterData;
    }

    setTimer(time: number) {
        this.dataUpdateDelay = time;
    }


    isDestroyed(): boolean {
        return this.boosterData.boosterStatus === BoosterStatus.DESTROYED;
    }

    canDetachFromRocket(): boolean {
        return this.boosterData.fuelLevel <= 15;
    }

    private async initializeDetachment(): Promise<void> {
        console.log("Initializing booster detachment.");
        if (process.env.NODE_ENV != 'test') {
            //await this.rocketAPI.initializeSecondEngineForSecondStage();
            this.rocketBusProducer.sendMessage({action: 'notifyDetachment'}, 'rocket-' + this.boosterData.missionId + '-head-stages');
            this.sendData();
        }
    }

    // Waiting for detachment
    private async controlFirstStageOfFlight(): Promise<void> {
        const that = this;
        await setIntervalConditionPromise(() => {
                that.sendData();
                that.boosterData.fuelLevel -= 3;
            },
            this.dataUpdateDelay,
            () => (that.canDetachFromRocket() || that.isDestroyed()));
    }

    private async controlLandingProcess(): Promise<void> {
        console.log("Landing booster.");
        this.boosterData.boosterStatus = BoosterStatus.FLIP_MANEUVER;
        const that = this;
        const altitudeBearings = this.boosterData.altitude / 6;
        let nextBearing = this.boosterData.altitude - altitudeBearings;
        await setIntervalConditionPromise(() => {
                if (that.boosterData.altitude < nextBearing) {
                    this.boosterData.boosterStatus++;
                    nextBearing = this.boosterData.altitude - altitudeBearings;
                }

                that.boosterData.altitude -= that.boosterData.speed;
                that.boosterData.speed -= 0.1;
                that.boosterData.speed = that.boosterData.speed < 1 ? 2 : that.boosterData.speed;
                that.boosterData.fuelLevel -= 1;
                that.sendData();
            },
            this.dataUpdateDelay,
            () => (that.boosterData.altitude <= 0 || that.isDestroyed()));
        if (this.boosterData.boosterStatus === 99) {
            return;
        }
        this.rocketBusProducer.sendMessage({action: 'notifyOfLanding'}, 'rocket-' + this.boosterData.missionId + '-head-stages'); // This should not be here, we put this only so tests are easier to do
        console.log("Booster landed");
        this.boosterData.boosterStatus = BoosterStatus.LANDED;
        this.stopBoosterEnginesAfterLanding();
    }

    private stopBoosterEnginesAfterLanding() {
        if (this.boosterData.boosterStatus !== BoosterStatus.LANDED) {
            throw new Error(`Cannot stop engines before the booster has landed.`);
        }
        this.boosterData.speed = 0;
        this.boosterData.altitude = 0;
        this.sendData();
        console.log("Booster stopped");
    }

    async launch(): Promise<void> {
        /**
         *  Step 1 : Verify if the state is not launch to launch the booster
         *  Step 2 : For 10 iterations, increase altitude, speed
         *  Step 3 : At the mid-flight we land the booster while altitude is not 0
         */
        // if (this.boosterStatus != BoosterStatus.NOT_LAUNCHED) {
        //     throw new Error(`Cannot launch booster. Its current status is ${this.boosterStatus}`);
        // }
        console.log("Launching booster");
        console.log("Booster launched");
        this.sendData();
        if (process.env.NODE_ENV != 'test') {
            this.rocketBusProducer.sendMessage({action: 'notifyLaunch'}, 'rocket-' + this.boosterData.missionId + '-head-stages')
            // await this.rocketAPI.notifyLaunch();
        }

        await this.controlFirstStageOfFlight();
        if (this.isDestroyed()) return;

        await this.initializeDetachment();

        await this.controlLandingProcess(); // todo here
        if (this.isDestroyed()) return;

        this.sendData();
    }

    destroy(): void {
        if (this.boosterData.boosterStatus === BoosterStatus.ON_THE_ROCKET) {
            this.rocketBusProducer.sendMessage({action: 'notifyOfBoosterDestruction'}, 'rocket-' + this.boosterData.missionId + '-head-stages');
        }
        this.boosterData.boosterStatus = BoosterStatus.DESTROYED;
        console.log("*BOOM!* - Booster destroyed!");
        this.sendData();

    }

    drainBooster() {
        this.boosterData.fuelLevel = 0;
        this.boosterDrained = true;
    }
}