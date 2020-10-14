import TelemetryAPI from '../API/telemetryAPI';
import Payload from "../aggregate/Payload";
import MissionAPI from "../API/missionAPI";
import MissionPayloadStatus from "../entities/MissionPayloadStatus";


export default class PayloadController{

    private sleepTime : number;
    private sendingData : boolean;
    private telemetryAPI: TelemetryAPI = new TelemetryAPI();
    private missionAPI: MissionAPI = new MissionAPI();

    payload : Payload;


    constructor(){
        this.sleepTime = 1000;
        this.sendingData = true;
        this.payload = new Payload(this.sleepTime,this.sendingData);
    }

    async detachThePayload(){
        this.payload.detach();
        if(this.sendingData) this.telemetryAPI.setPayloadData(this.payload.payloadData);
        //if(this.sendingData) this.missionAPI.setPayloadMissionStatus(MissionPayloadStatus.SEPARATION);
        await this.payload.progressingToOrbitalPosition();
        var that = this;
        if(that.sendingData) that.telemetryAPI.setPayloadData(that.payload.payloadData);

    }

    setSleepTime(sleepTime : number){
        this.sleepTime = sleepTime;
        this.payload.setSleepTime(sleepTime);
    }
    setSendingData(send : boolean){
        this.sendingData = send;
        this.payload.setSendingData(send);
    }
}
