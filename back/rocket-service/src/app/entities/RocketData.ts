import RocketStatus from "./RocketStatus";

const telemetryAPI: TelemetryAPI = new TelemetryAPI();

class RocketData {

    rocketStatus: RocketStatus;
    fuelLevel: number;     // from 0 to 10
    altitude: number;
    speed: number;
    pressure: number;
    dataUpdateDelay: number;
    acceleration: number;
    pressureIncrease: number;



    constructor(rocketStatus = RocketStatus.READY_FOR_LAUNCH, fuelLevel = 0, altitude = 0, speed = 0, pressure = 0) {
        this.rocketStatus = rocketStatus;
        this.fuelLevel = fuelLevel;
        this.altitude = altitude;
        this.speed = speed;
        this.pressure = pressure;
        this.dataUpdateDelay = 1000;
        this.acceleration = 2;
        this.pressureIncrease = 5;
        telemetryAPI.sendData(this);
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


export default RocketData;