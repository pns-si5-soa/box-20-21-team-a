import TelemetryAPI from '../API/telemetryAPI';
import Payload from "../aggregate/Payload";
import MissionAPI from "../API/missionAPI";
import MissionPayloadStatus from "../entities/MissionPayloadStatus";


class PayloadController {

    private telemetryAPI: TelemetryAPI = new TelemetryAPI();
    private missionAPI: MissionAPI = new MissionAPI();

    payloads : Payload[];


    constructor() {
        this.payloads = [];
    }

    addNewPayload(payloadId :number) : number{
        let payload = new Payload(payloadId); 
           this.payloads[payloadId] = payload;
        return payloadId; 
    }

    async detachThePayload(id : number) {
        this.payloads[id].detach();
        if (process.env.NODE_ENV != "test") {
            this.telemetryAPI.sendPayloadData(this.payloads[id].payloadData);
        }
        if (process.env.NODE_ENV != "test") {
            // TODO 
            this.missionAPI.sendPayloadSeparationStatus(MissionPayloadStatus.PAYLOAD_SEPARATION_STATUS_FOR_MISSION);
        }
        await this.payloads[id].progressingToOrbitalPosition();
        var that = this;
        if (process.env.NODE_ENV != "test") {
            that.telemetryAPI.sendPayloadData(that.payloads[id].payloadData);
        }
    }


}

export default new PayloadController;
