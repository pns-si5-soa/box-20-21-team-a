import RocketStatus from "./RocketStatus";

class RocketData {

    rocketStatus: RocketStatus;
    fuelLevel: number;     // from 0 to 10
    altitude: number;
    speed: number;
    pressure: number;
    missionId : number;

    constructor(missionId : number,rocketStatus = RocketStatus.PREPARATION, fuelLevel: number, speed: number, pressure: number) {
        this.missionId = missionId;
        this.rocketStatus = rocketStatus;
        this.fuelLevel = fuelLevel;
        this.altitude = 0;
        this.speed = speed;
        this.pressure = pressure;
    }

    toJsonObject() {
        return {
            missionId : this.missionId,
            rocketStatus: this.rocketStatus,
            fuelLevel: this.fuelLevel,
            altitude: this.altitude,
            speed: this.speed,
            pressure: this.pressure,
        };
    }
}


export default RocketData;