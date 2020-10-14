import RocketStatus from "./RocketStatus";

class RocketData {

    rocketStatus: RocketStatus;
    fuelLevel: number;     // from 0 to 10
    altitude: number;
    speed: number;
    pressure: number;

    constructor(rocketStatus = RocketStatus.READY_FOR_LAUNCH, fuelLevel = 0, altitude = 0, speed = 0, pressure = 0) {
        this.rocketStatus = rocketStatus;
        this.fuelLevel = fuelLevel;
        this.altitude = altitude;
        this.speed = speed;
        this.pressure = pressure;
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