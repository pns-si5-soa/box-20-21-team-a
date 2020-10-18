import {RocketStatus} from "./RocketStatus";
import Entitie from "../Entitie";

interface IRocketData{
    rocketData: {
        rocketStatus: RocketStatus,
        altitude: number,
        speed: number,
        fuelLevel: number,
        pressure: number,
    }
}

class RocketData extends Entitie {


    private rocketStatus: RocketStatus;
    private fuelLevel: number;     // from 0 to 10
    private altitude: number;
    private speed: number;
    private pressure: number;

    constructor(rocketStatus = RocketStatus.PREPARATION, fuelLevel = 0, speed = 0, pressure = 0) {
        super();
        this.rocketStatus = rocketStatus;
        this.fuelLevel = fuelLevel;
        this.altitude = 0;
        this.speed = speed;
        this.pressure = pressure;
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

    toObjectJSON(): IRocketData {
        return {
            rocketData: {
                rocketStatus: this.rocketStatus,
                fuelLevel: this.fuelLevel,
                altitude: this.altitude,
                speed: this.speed,
                pressure: this.pressure,
            }
        };
    }

    assign(other: any): void {
        this.altitude = other.altitude
        this.fuelLevel = other.fuelLevel
        this.speed = other.speed
        this.rocketStatus = other.rocketStatus
        this.pressure = other.pressure
        this.id = other.id
    }
}


export default RocketData