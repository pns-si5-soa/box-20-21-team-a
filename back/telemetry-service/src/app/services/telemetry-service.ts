import TelemetryData from "../entities/telemetryData";
import {RocketStatus} from "../entities/RocketStatus";

class TelemetryService {
    telemetryDataArray: TelemetryData[];
    fuelLevel: number;

    constructor() {
        this.telemetryDataArray = [];
        this.telemetryDataArray.push(new TelemetryData());
        this.fuelLevel = 2;
    }

    getData(): TelemetryData {
        if (this.telemetryDataArray.length > 0) {
            return this.telemetryDataArray[this.telemetryDataArray.length - 1];
        }
        return new TelemetryData();
    }

    getRocketStatus(): string {
        if (this.telemetryDataArray.length > 0) {
            return this.telemetryDataArray[this.telemetryDataArray.length - 1].getRocketStatus().toString();
        }
        return RocketStatus.NOT_READY.toString();
    }

    addData(req: any): TelemetryData {
        let newData = new TelemetryData(req.body.rocketStatus, this.fuelLevel);
        this.telemetryDataArray.push(newData);
        return newData;
    }
}

export default new TelemetryService();