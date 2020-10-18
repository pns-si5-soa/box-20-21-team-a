import RocketStatus from "./RocketStatus";
import {setIntervalConditionPromise} from '../tools/setIntervalx'
import TelemetryAPI from '../API/telemetryAPI';
import RocketData from "./RocketData";
import BoosterAPI from "../API/boosterAPI";

const TELEMETRY_API: TelemetryAPI = new TelemetryAPI();
const BOOSTER_API: BoosterAPI = new BoosterAPI();

const DATA_UPDATE_DELAY_IN_MS = 1000;
const ACCELERATION = 2;
const PRESSURE_INCREASE = 5;

const NUMBER_OF_SECONDS_IN_LAUNCH_COUNTDOWN = 60;
const NUMBER_OF_SECONDS_REMAINING_WHEN_MAIN_ENGINE_STARTS = 3;

class Rocket {

    private rocketData: RocketData;

    constructor(rocketData: RocketData) {
        this.rocketData = rocketData;
        console.log("Rocket is on preparation.");
    }

    private sendDataToTelemetry(): void {
        if (process.env.NODE_ENV != "test") {
            TELEMETRY_API.sendData(this.rocketData)
                .catch((e) => {
                    console.error(e);
                });
        }
    }

    private changeRocketStatusAndNotifyTelemetry(rocketStatus: RocketStatus): void {
        this.rocketData.rocketStatus = rocketStatus;
        this.sendDataToTelemetry();
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
        this.changeRocketStatusAndNotifyTelemetry(RocketStatus.ON_INTERNAL_POWER);
    }

    /**
     * Initializes the startup process before launch (second action).
     * Goes through those states :
     * - STARTUP
     * - MAIN_ENGINE_STARTED
     */
    async initializeStartupProcess(): Promise<void> {
        let numberOfSecondsBeforeLaunch = NUMBER_OF_SECONDS_IN_LAUNCH_COUNTDOWN;
        console.log("Initializing startup process. T-00:01:00");
        this.changeRocketStatusAndNotifyTelemetry(RocketStatus.STARTUP);
        this.sendDataToTelemetry();
        await setIntervalConditionPromise(() => {
                console.log(`T-${numberOfSecondsBeforeLaunch}s.`);
                numberOfSecondsBeforeLaunch--;
            },
            1000,
            () => numberOfSecondsBeforeLaunch === NUMBER_OF_SECONDS_REMAINING_WHEN_MAIN_ENGINE_STARTS);
        await this.startEnginesForLaunch();
    }

    private async startEnginesForLaunch(): Promise<void> {
        let numberOfSecondsBeforeLaunch = NUMBER_OF_SECONDS_REMAINING_WHEN_MAIN_ENGINE_STARTS; // TODO constant
        console.log("Starting main engine.");
        this.changeRocketStatusAndNotifyTelemetry(RocketStatus.STARTUP);
        this.changeRocketStatusAndNotifyTelemetry(RocketStatus.MAIN_ENGINE_STARTED);
        await setIntervalConditionPromise(() => {
                console.log(`T-${numberOfSecondsBeforeLaunch}s.`);
                numberOfSecondsBeforeLaunch--;
            },
            1000,
            () => numberOfSecondsBeforeLaunch === 0);
        await this.launchRocket();
    }

    private async launchRocket(): Promise<void> {
        console.log("T+00:00:00.");
        console.log("Sending launch signal to booster!");
        BOOSTER_API.launchBooster().catch((e) => {
            console.error(e);
        });
    }

    /**
     * Method called by booster after it has been launched. (Third action)
     * The rocket goes through those states after this call :
     * - LAUNCHED
     * - MAX_Q_REACHED
     */
    async notifyOfBoosterLaunch(): Promise<void> {
        this.changeRocketStatusAndNotifyTelemetry(RocketStatus.LAUNCHED);
        console.log("Rocket has been launched!");
        return await this.controlFlightBeforeMaxQ();
    }

    private async controlFlightBeforeMaxQ(): Promise<void> {
        const that = this;
        await setIntervalConditionPromise(() => {
                that.rocketData.altitude += this.rocketData.speed;
                that.rocketData.speed += ACCELERATION;
                that.rocketData.fuelLevel -= 1;
                that.rocketData.pressure += PRESSURE_INCREASE;
                that.sendDataToTelemetry();
            },
            DATA_UPDATE_DELAY_IN_MS,
            () => (that.rocketData.pressure >= 70 || that.rocketData.rocketStatus === RocketStatus.DESTROYED));
        if (that.rocketData.rocketStatus === RocketStatus.DESTROYED) return;
        return await this.controlFlightAfterMaxQ();
    }

    private async controlFlightAfterMaxQ(): Promise<void> {
        console.log("Going through MAX Q. Throttling down...");
        this.changeRocketStatusAndNotifyTelemetry(RocketStatus.MAX_Q_REACHED);
        const that = this;
        await setIntervalConditionPromise(() => {
                that.rocketData.altitude += that.rocketData.speed;
                that.rocketData.fuelLevel -= 1;
                that.sendDataToTelemetry();
            },
            DATA_UPDATE_DELAY_IN_MS,
            () => (
                that.rocketData.rocketStatus === RocketStatus.DESTROYED ||
                that.rocketData.rocketStatus === RocketStatus.MAIN_ENGINE_CUT_OFF));
        if (that.rocketData.rocketStatus === RocketStatus.DESTROYED) return;
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
        console.log("Cutting off main engine.");
        this.changeRocketStatusAndNotifyTelemetry(RocketStatus.MAIN_ENGINE_CUT_OFF);
        setTimeout(() => {
                this.changeRocketStatusAndNotifyTelemetry(RocketStatus.BOOSTER_DETACHED);
                console.log("Booster detached.");
            },
            3000); // TODO put promises here
        setTimeout(() => {
                this.changeRocketStatusAndNotifyTelemetry(RocketStatus.SECOND_ENGINE_START);
                console.log("Rocket engines started.");
            },
            3000);
        await this.controlSecondStageOfFlight();
    }

    private async controlSecondStageOfFlight(): Promise<void> {
        console.log("Second stage of flight initialized.");
        const that = this;
        await setIntervalConditionPromise(() => {
                that.rocketData.altitude += this.rocketData.speed;
                that.rocketData.fuelLevel -= 1;
                that.sendDataToTelemetry();
            },
            DATA_UPDATE_DELAY_IN_MS,
            () => (that.rocketData.rocketStatus === RocketStatus.DESTROYED || that.rocketData.fuelLevel <= 2));
        if (that.rocketData.rocketStatus === RocketStatus.DESTROYED) return;
        await this.initializeFairingSeparation();
    }

    private async initializeFairingSeparation(): Promise<void> {
        console.log("Initializing fairing separation.");
        this.changeRocketStatusAndNotifyTelemetry(RocketStatus.FAIRING_SEPARATION);
        console.log("Fairing separation is a success!")
        await this.cutOffSecondEngine();
    }

    private async cutOffSecondEngine() {
        setTimeout(() => {
                this.changeRocketStatusAndNotifyTelemetry(RocketStatus.SECOND_ENGINE_CUT_OFF);
                console.log("Second engine cut off.");
            },
            3000);
    }

    destroy(): void {
        this.changeRocketStatusAndNotifyTelemetry(RocketStatus.DESTROYED);
        console.log("*BOOM!* - Rocket destroyed!");
    }
}


export default Rocket;