import BoosterStatus from './BoosterStatus';
import {setIntervalConditionPromise} from '../tools/set_intervalx';
import TelemetryAPI from '../API/telemetryAPI';
import RocketAPI from "../API/RocketAPI";


export default class BoosterData { // TODO we should have separate objects for Booster and BoosterData

    private boosterStatus: BoosterStatus;
    private altitude: number;
    private speed: number;
    private fuelLevel: number;
    private dataUpdateDelay: number;
    private canSendData: boolean;

    private telemetryAPI: TelemetryAPI = new TelemetryAPI();
    private rocketAPI: RocketAPI = new RocketAPI();

    constructor() {
        this.canSendData = true;
        this.boosterStatus = BoosterStatus.NOT_LAUNCHED;
        this.fuelLevel = 50;
        this.altitude = 0;
        this.speed = 0;
        this.dataUpdateDelay = 500;
    }

    sendData(): void {
        if (this.canSendData) {
            this.telemetryAPI.sendBoosterData(this);
        }
    }

    setTimer(time: number) {
        this.dataUpdateDelay = time;
    }

    stopSendingData() {
        this.canSendData = false;
    }

    toObjectJSON() {
        return {
            boosterStatus: this.boosterStatus,
            fuelLevel: this.fuelLevel,
            altitude: this.altitude,
            speed: this.speed
        };
    }

    isDestroyed(): boolean {
        return this.boosterStatus === BoosterStatus.DESTROYED;
    }

    canDetachFromRocket(): boolean {
        return this.fuelLevel <= 0;
    }

    async initializeDetachment(): Promise<void> {
        console.log("Initializing booster detachment.");
        this.boosterStatus = BoosterStatus.IN_SECOND_STAGE;
        if (this.canSendData) await this.rocketAPI.notifyBoosterDetachment();
    }

    private async controlFirstStageOfFlight(): Promise<void> {
        const that = this;
        await setIntervalConditionPromise(() => {
                that.sendData();
                that.altitude += that.speed;
                that.speed += 1;
                that.fuelLevel -= 1;
            },
            this.dataUpdateDelay,
            () => (that.canDetachFromRocket() || that.isDestroyed()));
    }

    private async controlLandingProcess(): Promise<void> {
        console.log("Landing booster");
        const that = this;
        await setIntervalConditionPromise(() => {
                that.sendData();
                that.altitude -= that.speed;
                that.speed -= 1;
                that.speed = that.speed < 1 ? 2 : that.speed;
                // that.fuelLevel -= 1;
            },
            this.dataUpdateDelay,
            () => (that.altitude <= 0 || that.isDestroyed()));
        if (this.boosterStatus === BoosterStatus.DESTROYED) {
            return;
        }
        console.log("Booster landed");
        this.boosterStatus = BoosterStatus.LANDED;
        this.stopBoosterEnginesAfterLanding();
    }

    private stopBoosterEnginesAfterLanding() {
        if (this.boosterStatus !== BoosterStatus.LANDED) {
            throw new Error(`Cannot stop engines before the booster has landed.`);
        }
        this.speed = 0;
        this.altitude = 0;
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
        this.boosterStatus = BoosterStatus.IN_FIRST_STAGE;
        this.speed = 10;
        console.log("Booster launched");
        this.sendData();
        if (this.canSendData) await this.rocketAPI.notifyLaunch();

        await this.controlFirstStageOfFlight();
        if (this.isDestroyed()) return;

        await this.initializeDetachment();

        this.sendData();

        await this.controlLandingProcess();
        if (this.isDestroyed()) return;

        this.sendData();
    }

    destroy(): void {
        this.boosterStatus = BoosterStatus.DESTROYED;
        console.log("*BOOM!* - Booster destroyed!");
        this.sendData();
    }


}