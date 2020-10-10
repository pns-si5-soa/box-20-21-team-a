import PayloadStatus from "./PayloadStatus";
import {setIntervalConditionPromise} from "../tools/set_interval_x";
import e from "express";
import TelemetryAPI from '../API/telemetryAPI';


export default class Payload{

    private speed : number;
    private altitude : number;
    private payloadStatus : PayloadStatus;
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
        console.log("Detaching Payload in progress");
        // TODO : SEND TO TELEMETRY
        if(this.sendingData) this.telemetryAPI.setPayloadData(this);
        this.payloadStatus = PayloadStatus.IN_PROGRESS;
        this.speed = 10;
        this.altitude = 37000;
        const that = this;
         // TODO : SEND TO TELEMETRY
        if(that.sendingData) that.telemetryAPI.setPayloadData(that);

        //console.log(this.toObjectJSON());
        await setIntervalConditionPromise(function(){
            that.altitude -= that.speed;
            that.speed += 5;
            //console.log(that.toObjectJSON());
            // TODO : SEND TO TELEMETRY
            if(that.sendingData) that.telemetryAPI.setPayloadData(that);

        },this.sleepTime,function(){
            return that.altitude < 36000;
        })
       
        this.payloadStatus = PayloadStatus.DETACHED;
        console.log("Payload is detached");
        // TODO : SEND TO TELEMETRY
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