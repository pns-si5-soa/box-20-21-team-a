import RocketAnomalies from "../entities/RocketAnomalies";
import {Anomaly} from "../entities/Anomaly";
import RocketData from "../entities/Rocket/RocketData";
import BoosterData from "../entities/Booster/BoosterData";



class AnomalyAnalyserService {

    rocketAnomalies : RocketAnomalies[];

    constructor() {
        this.rocketAnomalies = [];
    }

    getAnomalies(rocketId : number) : Anomaly[] {
        return this.rocketAnomalies[rocketId].getAnomalies();
    }

    analyseRocketData(rocketData: RocketData) {
        let rocketAlreadyExists = false;
        this.rocketAnomalies.forEach(rocket => {
            if (rocket.missionId == rocketData.getMissionId()) rocketAlreadyExists = true;
        });
        if (!rocketAlreadyExists){
            this.rocketAnomalies.push(new RocketAnomalies(rocketData.getMissionId()));
        }
        this.rocketAnomalies[rocketData.getMissionId()].analyseRocketData(rocketData);
    }


    analyseBoosterData(boosterData: BoosterData) {
        let rocketAlreadyExists = false;
        this.rocketAnomalies.forEach(rocket => {
            if (rocket.missionId == boosterData.getMissionId()) rocketAlreadyExists = true;
        });
        if (!rocketAlreadyExists){
            this.rocketAnomalies.push(new RocketAnomalies(boosterData.getMissionId()));
        }
        this.rocketAnomalies[boosterData.getMissionId()].analyseBoosterData(boosterData);
    }
}


export default new AnomalyAnalyserService();