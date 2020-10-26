import {setIntervalConditionPromise} from '../tools/set_intervalx';
import TelemetryAPI from '../API/telemetryAPI';
import RocketAPI from "../API/RocketAPI";
import BoosterStatus from "./BoosterStatus"
import BoosterData from "./BoosterData";
import MissionAPI from "../API/MissionAPI";
import Consumer from '../consumer';
import Producer from '../../consumer';
const producer = new Producer();

interface Iaction{
    action : String;
}
export default class Booster {

    booster : BoosterData;

    private telemetryAPI: TelemetryAPI = new TelemetryAPI();
    private rocketAPI: RocketAPI = new RocketAPI();
    public dataUpdateDelay = 1000;
    private missionAPI = new MissionAPI();
    private boosterDrained = false;
    private rocketBus : Consumer;

    constructor(boosterData: BoosterData) {
        this.booster = boosterData;
        this.rocketBus = new Consumer();
        this.rocketBus.run('rocket-'+this.booster.missionId+'-booster',(value: Object) => {
            console.log(" callback");

            this.triggerActionWhenReceiveBusSignal(value);
        })
    }

    private triggerActionWhenReceiveBusSignal(signal : any){
        if(signal.action == 'launchBooster'){
            this.launch();
        }
        // TODO : if on signal and action to do 
    }

    sendData(): void {
      
        if (process.env.NODE_ENV != 'test') {
            this.telemetryAPI.sendBoosterData(this.booster);
            console.log("sent to mission : status "+this.booster.boosterStatus+" id : "+this.booster.missionId)
            this.missionAPI.sendBoosterData(this.booster.boosterStatus,this.booster.missionId);
        }
    }


    getBoosterData():BoosterData{
        return this.booster;
    }

    setTimer(time: number) {
        this.dataUpdateDelay = time;
    }

   

    isDestroyed(): boolean {
        return this.booster.boosterStatus === BoosterStatus.DESTROYED;
    }

    canDetachFromRocket(): boolean {
        return this.booster.fuelLevel <= 15;
    }

    async initializeDetachment(): Promise<void> {
        console.log("Initializing booster detachment.");
        this.booster.boosterStatus = BoosterStatus.FLIP_MANEUVER;
        if (process.env.NODE_ENV != 'test') {
            //await this.rocketAPI.initializeSecondEngineForSecondStage();
            producer.sendMessage({action : 'notifyDetachment'},'rocket-'+this.booster.missionId+'-head-stages')
            this.sendData();

        }
    }

    private async controlFirstStageOfFlight(): Promise<void> {
        const that = this;
        await setIntervalConditionPromise(() => {
                that.sendData();
                that.booster.altitude += that.booster.speed;
                that.booster.speed += 1;
                if (!this.boosterDrained) that.booster.fuelLevel -= 1;
            },
            this.dataUpdateDelay,
            () => (that.canDetachFromRocket() || that.isDestroyed()));
    }

    private async controlLandingProcess(): Promise<void> {
        console.log("Landing booster");
        const that = this;
        const altitudeBearings = this.booster.altitude/6;
        let nextBearing=this.booster.altitude-altitudeBearings;
        await setIntervalConditionPromise(() => {
                if (that.booster.altitude<nextBearing){
                    this.booster.boosterStatus++;
                    console.log("----> "+this.booster.boosterStatus);
                    nextBearing=this.booster.altitude-altitudeBearings;
                }
                that.sendData();
                that.booster.altitude -= that.booster.speed;
                that.booster.speed -= 1;
                that.booster.speed = that.booster.speed < 1 ? 2 : that.booster.speed;
                // that.fuelLevel -= 1;
            },
            this.dataUpdateDelay+500,
            () => (that.booster.altitude <= 0 || that.isDestroyed()));
        if (this.booster.boosterStatus === BoosterStatus.DESTROYED) {
            return;
        }
        console.log("Booster landed");
        this.booster.boosterStatus = BoosterStatus.LANDED;
        this.stopBoosterEnginesAfterLanding();
    }

    private stopBoosterEnginesAfterLanding() {
        if (this.booster.boosterStatus !== BoosterStatus.LANDED) {
            throw new Error(`Cannot stop engines before the booster has landed.`);
        }
        this.booster.speed = 0;
        this.booster.altitude = 0;
        this.sendData();
        console.log("Booster stopped");
    }

    async launch(): Promise<void> {
        /**
         *  Step 1 : Verify if the state is not launch to launch the booster
         *  Step 2 : For 10 iterations, increse altitude, speed
         *  Step 3 : At the mid-flight we land the booster while altitude is not 0
         */
        // if (this.boosterStatus != BoosterStatus.NOT_LAUNCHED) {
        //     throw new Error(`Cannot launch booster. Its current status is ${this.boosterStatus}`);
        // }
        console.log("Launching booster");
        this.booster.speed = 10;
        console.log("Booster launched");
        this.sendData();
        if (process.env.NODE_ENV != 'test') {
            producer.sendMessage({action : 'notifyLaunch'},'rocket-'+this.booster.missionId+'-head-stages')
           // await this.rocketAPI.notifyLaunch();
        }

        await this.controlFirstStageOfFlight();
        if (this.isDestroyed()) return;

        await this.initializeDetachment();

        this.sendData();

        await this.controlLandingProcess();
        if (this.isDestroyed()) return;

        this.sendData();
    }

    destroy(): void {
        this.booster.boosterStatus = BoosterStatus.DESTROYED;
        console.log("*BOOM!* - Booster destroyed!");
        this.sendData();

    }

    drainBooster() {
        this.booster.fuelLevel=0;
        this.boosterDrained=true;
        console.log(this.boosterDrained)
    }
}