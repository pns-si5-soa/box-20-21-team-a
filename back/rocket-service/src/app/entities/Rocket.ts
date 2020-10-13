import RocketStatus from "./RocketStatus";
import {setIntervalConditionPromise} from '../tools/setIntervalx'
import TelemetryAPI from '../API/telemetryAPI';

const TELEMETRY_API: TelemetryAPI = new TelemetryAPI();

class Rocket {

    private rocketData: RocketData;

    constructor(rocketStatus = RocketStatus.READY_FOR_LAUNCH, fuelLevel = 0, altitude = 0, speed = 0, pressure = 0) {
        this.rocketData.rocketStatus = rocketStatus;
        this.rocketData.fuelLevel = fuelLevel;
        this.rocketData.altitude = altitude;
        this.rocketData.speed = speed;
        this.rocketData.pressure = pressure;
        this.rocketData.dataUpdateDelay = 1000;
        this.rocketData.acceleration = 2;
        this.rocketData.pressureIncrease = 5;
        TELEMETRY_API.sendData(this);
    }


    async notifyLaunch() {
        this.rocketStatus = RocketStatus.LAUNCHED;
        await TELEMETRY_API.sendData(this);
        console.log("Rocket has been launched!");
    }

    async initializeEngines() {
        console.log("Initializing rocket engines.");
        this.rocketData.speed = 50;
        console.log("Rocket engines started.");
        await this.controlSecondStageOfFlight();
        TELEMETRY_API.sendData(this);
    }

    private async controlSecondStageOfFlight(): Promise<void> {
        console.log("Second stage of flight initialized.");
        this.rocketData.rocketStatus = RocketStatus.BOOSTER_DETACHED;
        TELEMETRY_API.sendData(this.rocketData);
        const that = this.rocketData;
        await setIntervalConditionPromise(()=>{
            that.altitude += this.rocketData.speed;
            that.speed += this.acceleration;
            that.fuelLevel -= 1;
            that.pressure += this.rocketData.pressureIncrease;
            TELEMETRY_API.sendData(that);
        },
            this.rocketData.dataUpdateDelay,
            ()=>(that.pressure >= 70 || that.rocketStatus === RocketStatus.DESTROYED));
        if(that.rocketStatus === RocketStatus.DESTROYED) return;
        await this.controlAfterMaxQHasBeenReachedReached();
    }

    private async controlAfterMaxQHasBeenReachedReached(): Promise<void> {
        console.log("Going through MAX Q. Throttling down...");
        this.rocketStatus = RocketStatus.WENT_THROUGH_MAX_Q;
        TELEMETRY_API.sendData(this);
        const that = this;
        await setIntervalConditionPromise(()=>{
                TELEMETRY_API.sendData(that);
                that.altitude += this.speed;
                that.fuelLevel -= 1;
            },
            this.dataUpdateDelay,
            ()=>(that.rocketStatus === RocketStatus.DESTROYED || that.fuelLevel <= 0));
        if(that.rocketStatus === RocketStatus.DESTROYED) return;
    }

    destroy(): void {
        this.rocketStatus = RocketStatus.DESTROYED;
        TELEMETRY_API.sendData(this);
        console.log("*BOOM!* - Rocket destroyed!");
    }


}


export default Rocket