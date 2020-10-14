import TelemetryAPI from '../API/telemetryAPI';
import Payload from "../aggregate/Payload";


export default class PayloadController{

    private sleepTime : number;
    private sendingData : boolean;
    private telemetryAPI: TelemetryAPI = new TelemetryAPI();
   
    payload : Payload;


    constructor(){
        this.sleepTime = 1000;
        this.sendingData = true;
        this.payload = new Payload(this.sleepTime,this.sendingData);
    }

    async detachThePayload(){
        this.payload.detach();
        if(this.sendingData) this.telemetryAPI.setPayloadData(this.payload.payloadData);
        await this.payload.progressingToOrbitalPosition();
        var that = this;
        if(that.sendingData) that.telemetryAPI.setPayloadData(that.payload.payloadData);

    }

    setSleepTime(sleepTime : number){
        this.sleepTime = sleepTime;
    }
    setSendingData(send : boolean){
        this.sendingData = send;
    }
}
