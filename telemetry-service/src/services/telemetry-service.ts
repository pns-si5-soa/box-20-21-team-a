import TelemetryData from "../entities/telemetryData";


class TelemetryService {
    telemetryData: TelemetryData;

    constructor() {
        this.telemetryData = new TelemetryData();
    }


    getData() : TelemetryData {
        console.log(this.telemetryData);
        return this.telemetryData;
    }
}

export default TelemetryService