import RocketAnomalies from "../entities/RocketAnomalies";
import {Anomaly} from "../entities/Anomaly";
import RocketData from "../entities/Rocket/RocketData";
import BoosterData from "../entities/Booster/BoosterData";

interface IAnomalies{
    [id : string] : RocketAnomalies
}
class AnomalyAnalyserService {

    rocketAnomalies : IAnomalies;

    constructor() {
        this.rocketAnomalies = {};
    }

    getAnomalies(rocketId : string) : Anomaly[] {;
        return this.rocketAnomalies[rocketId].getAnomalies();
    }

    analyseRocketData(rocketDataJSON: RocketData) {
        let rocketAlreadyExists = false;
        
        const rocketData = new RocketData().assign(rocketDataJSON);
        if(this.rocketAnomalies[rocketData.getMissionId()] != undefined){
            rocketAlreadyExists = true;
        }
        if (!rocketAlreadyExists){
            this.rocketAnomalies[rocketData.getMissionId()]= new RocketAnomalies(rocketData.getMissionId());
        }
        this.rocketAnomalies[rocketData.getMissionId()].analyseRocketData(rocketData);
    }


    analyseBoosterData(boosterDataJSON: BoosterData) {
        let rocketAlreadyExists = false;
        const boosterData = new BoosterData().assign(boosterDataJSON);
       
        if(this.rocketAnomalies[boosterData.getMissionId()] != undefined){
            rocketAlreadyExists = true;
        }
        if (!rocketAlreadyExists){
            this.rocketAnomalies[boosterData.getMissionId()]= new RocketAnomalies(boosterData.getMissionId());
        }
        this.rocketAnomalies[boosterData.getMissionId()].analyseBoosterData(boosterData);
    }
}


export default new AnomalyAnalyserService();