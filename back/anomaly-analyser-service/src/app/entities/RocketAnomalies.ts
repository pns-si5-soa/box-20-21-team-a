import {Anomaly} from "./Anomaly";
import RocketData from "./Rocket/RocketData";
import BoosterData from "./Booster/BoosterData";


export default class RocketAnomalies{

    anomalies : Anomaly[];
    previousAltitude = 0;
    missionId : string;

    constructor(missionId : string) {
        this.missionId = missionId;
        this.anomalies = [];
    }


    analyseRocketData(rocketData: RocketData) {
       
        if (rocketData.getFuelLevel() == 0 && !this.anomalies.includes(Anomaly.ROCKET_FUEL_EMPTY)){
            this.anomalies.push(Anomaly.ROCKET_FUEL_EMPTY);
        }
        if (this.previousAltitude>rocketData.getAltitude() && !this.anomalies.includes(Anomaly.ROCKET_FALLING)){
            this.anomalies.push(Anomaly.ROCKET_FALLING);
        }
    }

    analyseBoosterData(boosterData: BoosterData) {
       if (boosterData.getFuelLevel() == 0 && !this.anomalies.includes(Anomaly.BOOSTER_FUEL_EMPTY)){
            this.anomalies.push(Anomaly.BOOSTER_FUEL_EMPTY);
        }
    }

    getAnomalies() : Anomaly[] {
        return this.anomalies;
    }
}
