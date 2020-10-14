import {BoosterStatus} from "./BoosterStatus";
import Entitie from '../Entitie'

class BoosterData extends Entitie {
    private boosterStatus : BoosterStatus;
    private altitude: number;
    private speed: number;
    private fuelLevel: number;
    private id: number = -1;


    constructor(altitude=-1, speed=-1,fuelLevel=-1, boosterStatus=BoosterStatus.ON_THE_ROCKET) {
        super()
        this.altitude=altitude;
        this.speed=speed;
        this.fuelLevel=fuelLevel;
        this.boosterStatus=boosterStatus;
        this.create()
    }


    getFuelLevel(): number {
        return this.fuelLevel;
    }

    setFuelLevel(value: number) {
        this.fuelLevel = value;
        this.update({fuelLevel: this.fuelLevel})
    }

    setAltitude(value : number){
        this.altitude=value;
        this.update({altitude: this.altitude})
    }

    setSpeed(value : number){
        this.speed=value;
        this.update({speed: this.speed})
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
        this.update({boosterStatus: this.boosterStatus})
    }

    toObjectJSON(): Object {
        return {
            boosterStatus: this.boosterStatus,
            fuelLevel: this.fuelLevel,
            altitude: this.altitude,
            speed: this.speed,
        };
    }

    assign(other: any): void {
        this.altitude = other.altitude
        this.fuelLevel = other.fuelLevel
        this.speed = other.speed
        this.boosterStatus = other.boosterStatus
        this.id = other.id
    }
}
//ops.insertedIds:
export default BoosterData