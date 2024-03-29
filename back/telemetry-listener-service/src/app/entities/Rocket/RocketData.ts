import {RocketStatus} from "./RocketStatus";

class RocketData {


    private rocketStatus: RocketStatus;
    private fuelLevel: number;     // from 0 to 10
    private altitude: number;
    private speed: number;
    private pressure: number;
    private missionId: string;

    constructor(rocketStatus = RocketStatus.PREPARATION, fuelLevel = 0, speed = 0, pressure = 0, missionId: "") {
        this.rocketStatus = rocketStatus;
        this.fuelLevel = fuelLevel;
        this.altitude = 0;
        this.speed = speed;
        this.pressure = pressure;
        this.missionId = missionId
    }

    getMissionId() {
        return this.missionId;
    }

    setMissionId() {
        this.missionId = this.missionId
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

    toObjectJSON(): Object {
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