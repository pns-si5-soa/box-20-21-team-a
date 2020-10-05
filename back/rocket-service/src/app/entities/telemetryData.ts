import {RocketStatus} from "../services/rocket-service";


class TelemetryData {

    private rocketStatus: RocketStatus;
    private fuelLevel: number;     // from 0 to 10

    constructor(rocketStatus = RocketStatus.NOT_READY, fuelLevel = -1) {
        this.rocketStatus = rocketStatus;
        this.fuelLevel = fuelLevel;
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
}


export default TelemetryData