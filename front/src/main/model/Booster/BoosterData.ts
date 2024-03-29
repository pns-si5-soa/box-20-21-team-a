import {BoosterStatus} from "./BoosterStatus";


class BoosterData {
    altitude: number;
    speed: number;
    fuelLevel: number;
    boosterStatus : BoosterStatus;

    constructor(altitude=-1, speed=-1,fuelLevel=-1, boosterStatus=BoosterStatus.ON_THE_ROCKET) {
        this.altitude=altitude;
        this.speed=speed;
        this.fuelLevel=fuelLevel;
        this.boosterStatus=boosterStatus;
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


    getAltitude(){
        return this.altitude;
    }

    getSpeed(){
        return this.speed;
    }


    getBoosterStatus() {
        return this.boosterStatus;
    }

    setBoosterStatus(value: BoosterStatus) {
        this.boosterStatus = value;
    }

}

export default BoosterData