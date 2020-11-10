import RocketStatus from "./RocketStatus";
import {setIntervalConditionPromise} from '../tools/setIntervalx'
import TelemetryAPI from '../API/telemetryAPI';
import RocketData from "./RocketData";
import MissionAPI from "../API/missionAPI";
import Producer from "../producer/index"
import Consumer from "../consumer";

const TELEMETRY_API: TelemetryAPI = new TelemetryAPI();
const MISSION_API: MissionAPI = new MissionAPI();

const DATA_UPDATE_DELAY_IN_MS = 1000;
const ACCELERATION = 0.5;
const PRESSURE_INCREASE = 5;

const NUMBER_OF_SECONDS_IN_LAUNCH_COUNTDOWN = 5; // todo put to 1 minute
const NUMBER_OF_SECONDS_REMAINING_WHEN_MAIN_ENGINE_STARTS = 3;

class Rocket {


    private rocketData: RocketData;
    private rocketDrained = false;
    private isFallingDown = false;
    private canInitializeFairingSeparation = false;
    private rocketBusConsumer: Consumer;
    private rocketBusProducer: Producer;


    constructor(rocketData: RocketData) {
        this.rocketData = rocketData;
        console.log("Rocket is on preparation.");
        this.rocketBusProducer = new Producer(rocketData.missionId.toString());
        this.rocketBusConsumer = new Consumer(rocketData.missionId.toString());
        this.rocketBusConsumer.run('rocket-' + this.rocketData.missionId + '-head-stages', (value: Object) => {
            this.triggerActionWhenReceiveBusSignal(value);
        });
    }

    private triggerActionWhenReceiveBusSignal(signal: any) {
        if (signal.action == 'notifyLaunch') {
            this.notifyOfBoosterLaunch();
        } else if (signal.action == 'notifyDetachment') {
            this.initializeSecondEngineForSecondStage();
        } else if (signal.action == 'notifyOfBoosterDestruction') {
            this.destroy();
        } else if (signal.action == 'notifyOfLanding'){
            this.canInitializeFairingSeparation = true;
        }
    }

    private sendDataToTelemetryAndMission(): void {
        if (process.env.NODE_ENV != "test") {
            MISSION_API.sendData(this.rocketData.rocketStatus, this.rocketData.missionId).catch((e) => {
                console.error(e);
            });
            TELEMETRY_API.sendData(this.rocketData)
                .catch((e) => {
                    console.error(e);
                });
        }
    }

    private sendDataToAttachedBooster(): void {
        if (this.rocketData.rocketStatus < RocketStatus.BOOSTER_DETACHED) {
            this.rocketBusProducer.sendMessage(
                {
                    action: 'updateDataFromHeadStageData',
                    headStageTelemetryData: {
                        altitude: this.rocketData.altitude,
                        speed: this.rocketData.speed,
                    },
                },
                'rocket-' + this.rocketData.missionId + '-booster');
        }
    }

    private changeRocketStatusAndNotifyTelemetryAndMission(rocketStatus: RocketStatus): void {
        this.rocketData.rocketStatus = rocketStatus;
        this.sendDataToTelemetryAndMission();
    }

    getRocketData(): RocketData {
        return this.rocketData;
    }

    getRocketStatus(): RocketStatus {
        return this.rocketData.rocketStatus;
    }

    /**
     * Puts the rocket on internal power (first action)
     */
    putRocketOnInternalPower(): void {
        this.changeRocketStatusAndNotifyTelemetryAndMission(RocketStatus.ON_INTERNAL_POWER);
    }

    /**
     * Initializes the startup process before launch (second action).
     * Goes through those states :
     * - STARTUP
     * - MAIN_ENGINE_STARTED
     */
    async initializeStartupProcess(): Promise<void> {
        let numberOfSecondsBeforeLaunch = NUMBER_OF_SECONDS_IN_LAUNCH_COUNTDOWN;
        console.log("Initializing startup process.");
        this.changeRocketStatusAndNotifyTelemetryAndMission(RocketStatus.STARTUP);
        this.sendDataToTelemetryAndMission();
        await setIntervalConditionPromise(() => {
                console.log(`T-${numberOfSecondsBeforeLaunch}s.`);
                numberOfSecondsBeforeLaunch--;
            },
            1000,
            () => numberOfSecondsBeforeLaunch === NUMBER_OF_SECONDS_REMAINING_WHEN_MAIN_ENGINE_STARTS);
        this.startEnginesForLaunch();
    }

    private async startEnginesForLaunch(): Promise<void> {
        let numberOfSecondsBeforeLaunch = NUMBER_OF_SECONDS_REMAINING_WHEN_MAIN_ENGINE_STARTS;
        console.log("Starting main engine.");
        this.changeRocketStatusAndNotifyTelemetryAndMission(RocketStatus.STARTUP);
        this.changeRocketStatusAndNotifyTelemetryAndMission(RocketStatus.MAIN_ENGINE_STARTED);
        await setIntervalConditionPromise(() => {
                console.log(`T-${numberOfSecondsBeforeLaunch}s.`);
                numberOfSecondsBeforeLaunch--;
            },
            1000,
            () => numberOfSecondsBeforeLaunch === 0);
        this.launchRocket();
    }

    private async launchRocket(): Promise<void> {
        console.log("T+00:00:00.");
        console.log("Sending launch signal to booster!");
        this.rocketBusProducer.sendMessage({action: 'launchBooster'}, 'rocket-' + this.rocketData.missionId + '-booster');
    }

    /**
     * Method called by booster after it has been launched. (Third action)
     * The rocket goes through those states after this call :
     * - LAUNCHED
     * - MAX_Q_REACHED
     */
    async notifyOfBoosterLaunch(): Promise<void> {
        this.changeRocketStatusAndNotifyTelemetryAndMission(RocketStatus.LAUNCHED);
        console.log("Rocket has been launched!");
        this.controlFlightBeforeMaxQ();
    }

    private async controlFlightBeforeMaxQ(): Promise<void> {
        const that = this;
        await setIntervalConditionPromise(() => {
                that.rocketData.altitude += that.rocketData.speed;
                that.rocketData.speed += ACCELERATION;
                if (that.rocketDrained) {
                    that.rocketData.fuelLevel -= 1;
                } // fixme
                that.rocketData.pressure += PRESSURE_INCREASE;
                that.sendDataToTelemetryAndMission();
                that.sendDataToAttachedBooster();
            },
            DATA_UPDATE_DELAY_IN_MS,
            () => (that.rocketData.pressure >= 70
                || that.rocketData.rocketStatus === RocketStatus.DESTROYED
                || that.isFallingDown));
        if (that.rocketData.rocketStatus === RocketStatus.DESTROYED || this.isFallingDown) {
            return;
        }
        this.controlFlightAfterMaxQ();
    }

    private async controlFlightAfterMaxQ(): Promise<void> {
        console.log("Going through MAX Q. Throttling down...");
        this.changeRocketStatusAndNotifyTelemetryAndMission(RocketStatus.MAX_Q_REACHED);
        const that = this;
        await setIntervalConditionPromise(() => {
                that.rocketData.altitude += this.rocketData.speed;
                that.sendDataToTelemetryAndMission();
                that.sendDataToAttachedBooster();
            },
            DATA_UPDATE_DELAY_IN_MS,
            () => (
                that.rocketData.rocketStatus === RocketStatus.DESTROYED ||
                that.rocketData.rocketStatus === RocketStatus.MAIN_ENGINE_CUT_OFF
                || that.isFallingDown));
    }

    /**
     * Method called by the booster when it has no more fuel. (Forth action)
     * The rocket goes through thoses states after this call :
     * - MAIN_ENGINE_CUT_OFF
     * - BOOSTER_DETACHED
     * - SECOND_ENGINE_START
     * - FAIRING_SEPARATION
     * - SECOND_ENGINE_CUT_OFF
     */
    async initializeSecondEngineForSecondStage(): Promise<void> {
        await setIntervalConditionPromise(() => {
                this.changeRocketStatusAndNotifyTelemetryAndMission(this.rocketData.rocketStatus + 1);
                switch (this.rocketData.rocketStatus) {
                    case RocketStatus.MAIN_ENGINE_CUT_OFF:
                        console.log("Main engine cut off.");
                    case RocketStatus.BOOSTER_DETACHED:
                        console.log("Booster detached.");
                    case RocketStatus.SECOND_ENGINE_START:
                        console.log("Rocket engines started.");
                }
                this.rocketData.altitude += this.rocketData.speed / 2;
                this.sendDataToTelemetryAndMission();
                this.sendDataToAttachedBooster();
            },
            3000,
            () => (
                this.rocketData.rocketStatus === RocketStatus.DESTROYED ||
                this.rocketData.rocketStatus === RocketStatus.SECOND_ENGINE_START
                || this.isFallingDown));

        if (this.rocketData.rocketStatus === RocketStatus.DESTROYED
            || this.isFallingDown) {
            return;
        }
        this.controlSecondStageOfFlight();
    }

    private async controlSecondStageOfFlight(): Promise<void> {
        console.log("Second stage of flight initialized.");
        const that = this;
        await setIntervalConditionPromise(() => {
                /*if (!this.isFallingDown)*/
                that.rocketData.altitude += this.rocketData.speed;
                // else that.rocketData.altitude -= this.rocketData.speed;
                that.rocketData.fuelLevel -= 1;
                that.sendDataToTelemetryAndMission();
            },
            DATA_UPDATE_DELAY_IN_MS,
            () => (that.rocketData.rocketStatus === RocketStatus.DESTROYED
                || this.isFallingDown
                || that.canInitializeFairingSeparation
                /*|| that.rocketData.fuelLevel <= 7*/)); // fixme this could be to change
        if (this.rocketData.rocketStatus === RocketStatus.DESTROYED || this.isFallingDown) {
            return;
        }
        this.initializeFairingSeparation();
    }

    private async initializeFairingSeparation(): Promise<void> {
        console.log("Initializing fairing separation.");
        this.changeRocketStatusAndNotifyTelemetryAndMission(RocketStatus.FAIRING_SEPARATION);
        console.log("Fairing separation is a success!");
        await setIntervalConditionPromise(() => {
                this.rocketData.fuelLevel -= 1;
                this.sendDataToTelemetryAndMission();
            },
            DATA_UPDATE_DELAY_IN_MS,
            () => (this.rocketData.rocketStatus === RocketStatus.DESTROYED
                || this.isFallingDown
                || this.rocketData.fuelLevel <= 0));
        if (this.rocketData.rocketStatus === RocketStatus.DESTROYED || this.isFallingDown) {
            return;
        }
        this.cutOffSecondEngine();
    }

    private cutOffSecondEngine() {
        this.changeRocketStatusAndNotifyTelemetryAndMission(RocketStatus.SECOND_ENGINE_CUT_OFF);
        console.log("Second engine cut off.");
    }

    destroy(): void {
        if (this.rocketData.rocketStatus < RocketStatus.BOOSTER_DETACHED) {
            this.rocketBusProducer.sendMessage({action: 'notifyOfHeadDestruction'}, 'rocket-' + this.rocketData.missionId + '-booster');
        }
        this.changeRocketStatusAndNotifyTelemetryAndMission(RocketStatus.DESTROYED);
        console.log("*BOOM!* - Rocket destroyed!");
    }

    drainRocket() {
        this.rocketData.fuelLevel = 0;
        this.rocketDrained = true;
        console.log(this.rocketDrained)
    }

    private async controlRocketFalling(): Promise<void> {
        console.log("The rocket starts falling down!.");
        const that = this;
        await setIntervalConditionPromise(() => {
                that.rocketData.altitude -= this.rocketData.speed;
                if (that.rocketData.fuelLevel > 0) {
                    that.rocketData.fuelLevel -= 1;
                }
                that.sendDataToTelemetryAndMission();
                that.sendDataToAttachedBooster();
            },
            DATA_UPDATE_DELAY_IN_MS,
            () => (that.rocketData.rocketStatus === RocketStatus.DESTROYED
                || that.rocketData.altitude <= 0));
    }

    makeRocketFall() {
        this.isFallingDown = true;
        this.controlRocketFalling();
    }
}


export default Rocket;