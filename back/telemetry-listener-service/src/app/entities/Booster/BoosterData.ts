import {BoosterStatus} from "./BoosterStatus";

class BoosterData {
    private boosterStatus : BoosterStatus;
    private altitude: number;
    private speed: number;
    private fuelLevel: number;
    private missionId: string;


    constructor(altitude=-1, speed=-1,fuelLevel=-1, missionId: "", boosterStatus=BoosterStatus.ON_THE_ROCKET) {
        this.altitude=altitude;
        this.speed=speed;
        this.fuelLevel=fuelLevel;
        this.boosterStatus=boosterStatus;
        this.missionId = missionId
    }

    getMissionId() {
        return this.missionId;
    }

    setMissionId() {
        this.missionId = this.missionId
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

    toObjectJSON(): Object {
        return {
            boosterStatus: this.boosterStatus,
            fuelLevel: this.fuelLevel,
            altitude: this.altitude,
            speed: this.speed,
        };
    }
}
//ops.insertedIds:
export default BoosterData