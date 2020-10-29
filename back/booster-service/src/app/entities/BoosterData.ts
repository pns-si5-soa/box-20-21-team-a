import BoosterStatus from './BoosterStatus';


export default class BoosterData { // TODO delete this file

    missionId: string;
    boosterStatus: BoosterStatus;
    altitude: number;
    speed: number;
    fuelLevel: number;

    constructor(missionId : string,boosterStatus = BoosterStatus.ON_THE_ROCKET, fuelLevel = 30, altitude=0, speed=0, pressure=0 ) {
        this.boosterStatus = boosterStatus;
        this.fuelLevel = fuelLevel;
        this.altitude = altitude;
        this.speed = speed;
        this.missionId = missionId;
    }

    toObjectJSON() {
        return {
            missionId : this.missionId,
            boosterStatus: this.boosterStatus,
            fuelLevel: this.fuelLevel,
            altitude: this.altitude,
            speed: this.speed
        };
    }

    
}