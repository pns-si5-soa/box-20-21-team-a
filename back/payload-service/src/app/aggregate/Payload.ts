import PayloadStatus from "../entities/PayloadStatus";
import {setIntervalConditionPromise} from "../tools/set_interval_x";
import TelemetryAPI from '../API/telemetryAPI';
import PayloadData from "../entities/PayloadData";


export default class Payload{

    
    payloadData : PayloadData;
    private telemetryAPI: TelemetryAPI = new TelemetryAPI();
    
    


    constructor(payloadId : string){

        this.payloadData = new PayloadData(payloadId);
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
            if(process.env.NODE_ENV != "test") that.telemetryAPI.sendPayloadData(that.payloadData);

        },process.env.NODE_ENV == "test" ? 0 : 1000,function(){
            return that.payloadData.altitude < 36000;
        })
       
        this.payloadData.payloadStatus = PayloadStatus.DETACHED;
        console.log("Payload is detached");
    }

}
