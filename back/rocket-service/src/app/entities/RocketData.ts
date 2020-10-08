import RocketStatus from "./RocketStatus";
import {setIntervalPromiseX } from '../tools/setIntervalx'

class RocketData {

    private rocketStatus: RocketStatus;
    private fuelLevel: number;     // from 0 to 10
    private altitude: number;
    private speed: number;
    private pressure: number;
    private time: number;
    private speedIncrese: number;
    private pressureIncrese: number;

    constructor(rocketStatus = RocketStatus.NOT_READY, fuelLevel = -1, altitude=-1, speed=-1, pressure=-1) {
        this.rocketStatus = rocketStatus;
        this.fuelLevel = fuelLevel;
        this.altitude=altitude;
        this.speed=speed;
        this.pressure=pressure;
        this.time=10000;
        this.speedIncrese=2;
        this.pressureIncrese=10;
    }


    async launch(){
        await setIntervalPromiseX(() => {
            if(this.pressure>70){
                this.speedIncrese=0;
                this.pressureIncrese=0;
            }
                this.altitude += this.speed
                this.speed += this.speedIncrese;
                this.fuelLevel -= 1;
                this.pressure += this.pressureIncrese;
                console.log(this.pressure);
                console.log(this.speed);

        }, this.time, 100);
    }

    getRocketStatus() {
        return this.rocketStatus;
    }

    setRocketStatus(value: RocketStatus) {
        this.rocketStatus = value;
    }

    getFuelLevel(): number {
        return this.fuelLevel;
    }

    setFuelLevel(value: number) {
        this.fuelLevel = value;
    }

    setAltitude(value : number){
        this.altitude=value;
    }

    setSpeed(value : number){
        this.speed=value;
    }

    setPressure(value : number ){
        this.pressure=value;
    }

    getAltitude(){
        return this.altitude;
    }

    getSpeed(){
        return this.speed;
    }

    getPressure(){
        return this.pressure;
    }

}


export default RocketData