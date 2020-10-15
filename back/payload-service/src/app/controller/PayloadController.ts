import TelemetryAPI from '../API/telemetryAPI';
import Payload from "../aggregate/Payload";
import MissionAPI from "../API/missionAPI";
import MissionPayloadStatus from "../entities/MissionPayloadStatus";


export default class PayloadController{

    private telemetryAPI: TelemetryAPI = new TelemetryAPI();
    private missionAPI: MissionAPI = new MissionAPI();

    payload : Payload;


    constructor(){
        this.payload = new Payload();
    }

    async detachThePayload(){
        this.payload.detach();
        if(process.env.NODE_ENV != "test") this.telemetryAPI.sendPayloadData(this.payload.payloadData);
        //if(process.env.NODE_ENV != "test") this.missionAPI.sendPayloadSeparationStatus(MissionPayloadStatus.SEPARATION);
        await this.payload.progressingToOrbitalPosition();
        var that = this;
        if(process.env.NODE_ENV != "test") that.telemetryAPI.sendPayloadData(that.payload.payloadData);
    }


}
