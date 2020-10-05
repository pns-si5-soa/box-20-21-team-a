import TelemetryData from "../entities/telemetryData";
import {RocketStatus} from "../entities/RocketStatus";

class TelemetryService {
    telemetryDataArray: TelemetryData[];

    constructor() {
        this.telemetryDataArray = [];
        this.telemetryDataArray.push(new TelemetryData());
    }

    getData(): TelemetryData {
        if (this.telemetryDataArray.length > 0) {
            return this.telemetryDataArray[this.telemetryDataArray.length - 1];
        }
        return new TelemetryData();
    }

    addData(rocketStatus: RocketStatus, fuelLevel: number): TelemetryData {
        let newData = new TelemetryData(rocketStatus, fuelLevel);
        this.telemetryDataArray.push(newData);
        return newData;
    }
}

export default new TelemetryService();