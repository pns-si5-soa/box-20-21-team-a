import {Anomaly} from "./Anomaly";
import RocketData from "./Rocket/RocketData";
import BoosterData from "./Booster/BoosterData";

export default class RocketAnomalies{

    anomalies : Anomaly[];
    newAnomlies : Anomaly[] | undefined;
    previousAltitude = 0;
    missionId : string;

    constructor(missionId : string) {
        this.missionId = missionId;
        this.anomalies = [];
    }


    analyseRocketData(rocketData: RocketData) {
        this.newAnomlies = []
        if (rocketData.getFuelLevel() == 0 && !this.anomalies.includes(Anomaly.ROCKET_FUEL_EMPTY)){
            this.anomalies.push(Anomaly.ROCKET_FUEL_EMPTY);
            this.newAnomlies.push(Anomaly.ROCKET_FUEL_EMPTY);
            return this;
        }
        if (this.previousAltitude>rocketData.getAltitude() && !this.anomalies.includes(Anomaly.ROCKET_FALLING)){
            this.anomalies.push(Anomaly.ROCKET_FALLING);
            this.newAnomlies.push(Anomaly.ROCKET_FALLING);
            return this;
        }
        return null;
    }

    analyseBoosterData(boosterData: BoosterData) {
        this.newAnomlies = []
       if (boosterData.getFuelLevel() == 0 && !this.anomalies.includes(Anomaly.BOOSTER_FUEL_EMPTY)){
            this.anomalies.push(Anomaly.BOOSTER_FUEL_EMPTY);
           this.newAnomlies.push(Anomaly.BOOSTER_FUEL_EMPTY);
           return this;
        }
        return null;
    }

    getAnomalies() : Anomaly[] {
        return this.anomalies;
    }
}
