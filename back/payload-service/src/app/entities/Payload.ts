import PayloadStatus from "./PayloadStatus";
import {setIntervalConditionPromise} from "../tools/set_interval_x";
import e from "express";

export default class Payload{

    private speed : number;
    private altitude : number;
    private payloadStatus : PayloadStatus;
    private sleepTime : number;

    constructor(){
        this.sleepTime = 1000;
        this.speed = 0;
        this.altitude = 0;
        this.payloadStatus = PayloadStatus.ATTACHED;
    }

    async detach(){
        // TODO : SEND TO TELEMETRY
        this.payloadStatus = PayloadStatus.IN_PROGRESS;
        this.speed = 10;
        this.altitude = 37000;
        const that = this;
         // TODO : SEND TO TELEMETRY
        console.log(this.toObjectJSON());
        await setIntervalConditionPromise(function(){
            that.altitude -= that.speed;
            that.speed += 5;
            console.log(that.toObjectJSON());
            // TODO : SEND TO TELEMETRY
        },this.sleepTime,function(){
            return that.altitude < 36000;
        })
         // TODO : SEND TO TELEMETRY
        console.log(that.toObjectJSON());
        this.payloadStatus = PayloadStatus.DETACHED;
    }

    toObjectJSON(){
        return {
            speed : this.speed,
            altitude : this.altitude,
            status: this.payloadStatus.toString()
        }
    }

    setSleepTime(sleepTime : number){
        this.sleepTime = sleepTime;
    }






}