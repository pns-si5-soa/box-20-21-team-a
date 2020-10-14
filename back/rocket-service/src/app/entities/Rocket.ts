import RocketStatus from "./RocketStatus";
import {setIntervalConditionPromise} from '../tools/setIntervalx'
import TelemetryAPI from '../API/telemetryAPI';
import RocketData from "./RocketData";

const TELEMETRY_API: TelemetryAPI = new TelemetryAPI();

const DATA_UPDATE_DELAY = 1000;
const ACCELERATION = 2;
const PRESSURE_INCREASE = 5;

class Rocket {

    private rocketData: RocketData;

    constructor(rocketData: RocketData) {
        this.rocketData = rocketData;
        TELEMETRY_API.sendData(this.rocketData);
    }

    getRocketData(): RocketData{
        return this.rocketData;
    }

    getRocketStatus(): RocketStatus {
        return this.rocketData.rocketStatus;
    }

    async notifyLaunch(): Promise<void> {
        this.rocketData.rocketStatus = RocketStatus.LAUNCHED;
        await TELEMETRY_API.sendData(this.rocketData);
        console.log("Rocket has been launched!");
    }

    async initializeEngines(): Promise<void> {
        console.log("Initializing rocket engines.");
        this.rocketData.speed = 50;
        console.log("Rocket engines started.");
        await this.controlSecondStageOfFlight();
        TELEMETRY_API.sendData(this.rocketData);
    }

    private async controlSecondStageOfFlight(): Promise<void> {
        console.log("Second stage of flight initialized.");
        this.rocketData.rocketStatus = RocketStatus.BOOSTER_DETACHED;
        TELEMETRY_API.sendData(this.rocketData);
        const that = this;
        await setIntervalConditionPromise(() => {
                that.rocketData.altitude += this.rocketData.speed;
                that.rocketData.speed += ACCELERATION;
                that.rocketData.fuelLevel -= 1;
                that.rocketData.pressure += PRESSURE_INCREASE;
                TELEMETRY_API.sendData(that.rocketData);
            },
            DATA_UPDATE_DELAY,
            () => (that.rocketData.pressure >= 70 || that.rocketData.rocketStatus === RocketStatus.DESTROYED));
        if (that.rocketData.rocketStatus === RocketStatus.DESTROYED) return;
        await this.controlAfterMaxQHasBeenReachedReached();
    }

    private async controlAfterMaxQHasBeenReachedReached(): Promise<void> {
        console.log("Going through MAX Q. Throttling down...");
        this.rocketData.rocketStatus = RocketStatus.WENT_THROUGH_MAX_Q;
        TELEMETRY_API.sendData(this.rocketData);
        const that = this;
        await setIntervalConditionPromise(() => {
                TELEMETRY_API.sendData(that.rocketData);
                that.rocketData.altitude += this.rocketData.speed;
                that.rocketData.fuelLevel -= 1;
            },
            DATA_UPDATE_DELAY,
            () => (that.rocketData.rocketStatus === RocketStatus.DESTROYED || that.rocketData.fuelLevel <= 0));
        if (that.rocketData.rocketStatus === RocketStatus.DESTROYED) return;
    }

    destroy(): void {
        this.rocketData.rocketStatus = RocketStatus.DESTROYED;
        TELEMETRY_API.sendData(this.rocketData);
        console.log("*BOOM!* - Rocket destroyed!");
    }
}


export default Rocket