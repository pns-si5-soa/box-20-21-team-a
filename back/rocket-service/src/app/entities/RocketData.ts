import RocketStatus from "./RocketStatus";

class RocketData {

    rocketStatus: RocketStatus;
    fuelLevel: number;     // from 0 to 10
    altitude: number;
    speed: number;
    pressure: number;
    rocketId : number;

    constructor(rocketId : number,rocketStatus = RocketStatus.PREPARATION, fuelLevel: number, speed: number, pressure: number) {
        this.rocketId = rocketId
        this.rocketStatus = rocketStatus;
        this.fuelLevel = fuelLevel;
        this.altitude = 0;
        this.speed = speed;
        this.pressure = pressure;
    }

    toJsonObject() {
        return {
            missionId : this.rocketId,
            rocketStatus: this.rocketStatus,
            fuelLevel: this.fuelLevel,
            altitude: this.altitude,
            speed: this.speed,
            pressure: this.pressure,
        };
    }
}


export default RocketData;