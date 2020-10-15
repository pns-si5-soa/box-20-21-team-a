import {BoosterStatus} from "./BoosterStatus";
import {insertOne, removeOne, find, update} from "../../db/Mongo"
import Entitie from '../Entitie'

interface IBoosterData{
    boosterData: {
        boosterStatus: BoosterStatus,
        altitude: number,
        speed: number,
        fuelLevel: number,
    }
}

class BoosterData extends Entitie {
    private boosterStatus : BoosterStatus;
    private altitude: number;
    private speed: number;
    private fuelLevel: number;


    constructor(altitude=-1, speed=-1,fuelLevel=-1, boosterStatus=BoosterStatus.NOT_LAUNCHED) {
        super()
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

    toObjectJSON(): IBoosterData {
        return {
            boosterData: {
                boosterStatus: this.boosterStatus,
                fuelLevel: this.fuelLevel,
                altitude: this.altitude,
                speed: this.speed,
            }
        };
    }
}
//ops.insertedIds:
export default BoosterData