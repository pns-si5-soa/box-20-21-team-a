import PayloadStatus from "../entities/PayloadStatus";
import {setIntervalConditionPromise} from "../tools/set_interval_x";
import TelemetryAPI from '../API/telemetryAPI';
import PayloadData from "../entities/PayloadData";


export default class Payload{

    
    payloadData : PayloadData;
    private sleepTime : number;
    private sendingData : boolean;
    private telemetryAPI: TelemetryAPI = new TelemetryAPI();
    
    


    constructor(sleepTime : number,sendingData: boolean){
        this.sleepTime = sleepTime;
        this.sendingData = sendingData;
        this.payloadData = new PayloadData();
    }

    detach(){
        console.log("Detaching Payload...");
        this.payloadData.payloadStatus = PayloadStatus.IN_PROGRESS;
        this.payloadData.speed = 10;
        this.payloadData.altitude = 37000;

    }

    async progressingToOrbitalPosition(){
        console.log("Progressing to orbital position ...");
        var that = this;
        await setIntervalConditionPromise(function(){
            that.payloadData.altitude -= that.payloadData.speed;
            that.payloadData.speed += 5;
            if(that.sendingData) that.telemetryAPI.setPayloadData(that.payloadData);

        },this.sleepTime,function(){
            return that.payloadData.altitude < 36000;
        })
       
        this.payloadData.payloadStatus = PayloadStatus.DETACHED;
        console.log("Payload is detached");
    }

    setSleepTime(sleepTime : number){
        this.sleepTime = sleepTime;
    }
    setSendingData(send : boolean){
        this.sendingData = send;
    }

}
