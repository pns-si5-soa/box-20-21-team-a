import RocketStatus from "./RocketStatus";
import {setIntervalConditionPromise} from '../tools/setIntervalx'
import TelemetryAPI from '../API/telemetryAPI';

const telemetryAPI: TelemetryAPI = new TelemetryAPI();

class RocketData {

    private rocketStatus: RocketStatus;
    private fuelLevel: number;     // from 0 to 10
    private altitude: number;
    private speed: number;
    private pressure: number;
    private dataUpdateDelay: number;
    private acceleration: number;
    private pressureIncrease: number;



    constructor(rocketStatus = RocketStatus.READY_FOR_LAUNCH, fuelLevel = 0, altitude = 0, speed = 0, pressure = 0) {
        this.rocketStatus = rocketStatus;
        this.fuelLevel = fuelLevel;
        this.altitude = altitude;
        this.speed = speed;
        this.pressure = pressure;
        this.dataUpdateDelay = 500;
        this.acceleration = 2;
        this.pressureIncrease = 10;
        telemetryAPI.sendData(this);
    }


    async notifyLaunch() {
        this.rocketStatus = RocketStatus.LAUNCHED;
        await telemetryAPI.sendData(this);
        console.log("Rocket has been launched!");
    }

    async initializeEngines() {
        console.log("Initializing rocket engines.");
        this.speed = 50;
        await this.controlSecondStageOfFlight();
        telemetryAPI.sendData(this);
        console.log("Rocket engines started.");
    }

    private async controlSecondStageOfFlight(): Promise<void> {
        console.log("Second stage of flight initialized.")
        const that = this;
        await setIntervalConditionPromise(()=>{
            that.altitude += this.speed;
            that.speed += this.acceleration;
            that.fuelLevel -= 1;
            that.pressure += this.pressureIncrease;
            telemetryAPI.sendData(that);
        },
            this.dataUpdateDelay,
            ()=>(that.pressure < 70 || that.rocketStatus === RocketStatus.DESTROYED));
        if(this.rocketStatus === RocketStatus.DESTROYED) return;
        await this.controlAfterMaxQHasBeenReachedReached();
    }

    private async controlAfterMaxQHasBeenReachedReached(): Promise<void> {
        console.log("Going through MAX Q. Throttling down...");
        const that = this;
        await setIntervalConditionPromise(()=>{
                telemetryAPI.sendData(that);
                that.altitude += this.speed;
                that.fuelLevel -= 1;
            },
            this.dataUpdateDelay,
            ()=>(that.rocketStatus === RocketStatus.DESTROYED || that.fuelLevel <= 0));
    }

    destroy(): void {
        this.rocketStatus = RocketStatus.DESTROYED;
        telemetryAPI.sendData(this);
        console.log("*BOOM!* - Rocket destroyed!");
    }

    getRocketStatus() {
        return this.rocketStatus;
    }

    setRocketStatus(value: RocketStatus) {
        this.rocketStatus = value;
    }

    getFuelLevel(): number {
        return this.fuelLevel;
    }

    setFuelLevel(value: number) {
        this.fuelLevel = value;
    }

    setAltitude(value: number) {
        this.altitude = value;
    }

    setSpeed(value: number) {
        this.speed = value;
    }

    setPressure(value: number) {
        this.pressure = value;
    }

    getAltitude() {
        return this.altitude;
    }

    getSpeed() {
        return this.speed;
    }

    getPressure() {
        return this.pressure;
    }

    toJsonObject() {
        return {
            rocketStatus: this.rocketStatus,
            fuelLevel: this.fuelLevel,
            altitude: this.altitude,
            speed: this.speed,
            pressure: this.pressure,
        };
    }
}


export default RocketData