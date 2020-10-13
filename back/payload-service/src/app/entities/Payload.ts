import PayloadStatus from "./PayloadStatus";
import {setIntervalConditionPromise} from "../tools/set_interval_x";
import TelemetryAPI from '../API/telemetryAPI';


export default class Payload{

    private payloadStatus: PayloadStatus;
    private speed: number;
    private altitude: number;
    private sleepTime : number;
    private sendingData : boolean;
    private telemetryAPI: TelemetryAPI = new TelemetryAPI();


    constructor(){
        this.sleepTime = 1000;
        this.speed = 0;
        this.altitude = 0;
        this.payloadStatus = PayloadStatus.ATTACHED;
        this.sendingData = true;
    }

    async detach(){
        console.log("Detaching Payload...");
        if(this.sendingData) this.telemetryAPI.setPayloadData(this);
        this.payloadStatus = PayloadStatus.IN_PROGRESS;
        this.speed = 10;
        this.altitude = 37000;
        const that = this;
        if(that.sendingData) that.telemetryAPI.setPayloadData(that);
        console.log("Progressing to orbital position ...");
        await setIntervalConditionPromise(function(){
            that.altitude -= that.speed;
            that.speed += 5;
            if(that.sendingData) that.telemetryAPI.setPayloadData(that);

        },this.sleepTime,function(){
            return that.altitude < 36000;
        })
       
        this.payloadStatus = PayloadStatus.DETACHED;
        console.log("Payload is detached");
        if(that.sendingData) that.telemetryAPI.setPayloadData(that);

    }

    toObjectJSON(){
        return {
            speed : this.speed,
            altitude : this.altitude,
            payloadStatus: this.payloadStatus
                }
    }

    setSleepTime(sleepTime : number){
        this.sleepTime = sleepTime;
    }
    setSendingData(send : boolean){
        this.sendingData = send;
    }
}
