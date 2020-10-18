import BoosterStatus from './BoosterStatus';


export default class BoosterData { // TODO delete this file

    boosterStatus: BoosterStatus;
    altitude: number;
    speed: number;
    fuelLevel: number;
    public canSendData: boolean;


    constructor(boosterStatus = BoosterStatus.ON_THE_ROCKET, fuelLevel = 30, altitude=0, speed=0, pressure=0 ) {
        this.canSendData = true;
        this.boosterStatus = boosterStatus;
        this.fuelLevel = fuelLevel;
        this.altitude = altitude;
        this.speed = speed;
    }

    toObjectJSON() {
        return {
            boosterStatus: this.boosterStatus,
            fuelLevel: this.fuelLevel,
            altitude: this.altitude,
            speed: this.speed
        };
    }

    stopSendingData(){
        this.canSendData = false;
    }
}