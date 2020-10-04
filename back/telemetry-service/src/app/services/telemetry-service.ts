import TelemetryData from "../entities/telemetryData";


class TelemetryService {
    telemetryDataArray : TelemetryData[] = [new TelemetryData()];
    fuelLevel : number = 2 ;

    constructor() {
    }


    getData() : TelemetryData | undefined {
        let last = this.telemetryDataArray.pop();
            if (last) {
                this.telemetryDataArray.push(last);
            }
        return (last);
    }

    getRocketStatus() : string {
        let last = this.telemetryDataArray.pop();
        if( last !== undefined){
            this.telemetryDataArray.push(last);
            return (last.getRocketStatus());
        }
        return "Not Ready";
    }

    addData(req : any) : void {
        let newData = new TelemetryData(req.body.rocketStatus,this.fuelLevel);
        this.telemetryDataArray.push(newData);
    }
}

export default new TelemetryService