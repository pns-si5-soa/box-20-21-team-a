import TelemetryData from "../entities/telemetryData";


class TelemetryService {
    telemetryDataArray : TelemetryData[] = [new TelemetryData()];


    constructor() {
    }


    getData() : TelemetryData | undefined {
        let last = this.telemetryDataArray.pop();
            if (last) {
                this.telemetryDataArray.push(last);
            }
        return (last);
    }

    getRocketStatus() : boolean {
        let last = this.telemetryDataArray.pop();
        if( last !== undefined){
            this.telemetryDataArray.push(last);
            return (last.getRocketStatus());
        }
        return false;
    }

    addData(req : any) : void {
        let newData = new TelemetryData(req.body.rocketStatus,req.body.fuelLevel);
        this.telemetryDataArray.push(newData);
    }

    modifyData(req : any) : void {
        let dataToModify = this.telemetryDataArray.pop();
        if(dataToModify) {
            dataToModify.setFuelLevel(req.body.fuelLevel);
            dataToModify.setRocketStatus(req.body.rocketStatus);
        } else {
            throw "There are no data to modify";
        }
    }
}

export default new TelemetryService