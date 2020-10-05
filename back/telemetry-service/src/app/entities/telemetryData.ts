// TODO The file should be in PascalCase!
import {RocketStatus} from "./RocketStatus";

class TelemetryData {

    private rocketStatus: RocketStatus;
    private fuelLevel: number;     // from 0 to 10

    constructor(rocketStatus = RocketStatus.NOT_READY, fuelLevel = 10) {
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

export default TelemetryData;