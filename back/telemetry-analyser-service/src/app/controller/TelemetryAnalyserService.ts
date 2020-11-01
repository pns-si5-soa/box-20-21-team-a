import RocketAnomalies from "../entities/RocketAnomalies";
import {Anomaly} from "../entities/Anomaly";
import RocketData from "../entities/Rocket/RocketData";
import BoosterData from "../entities/Booster/BoosterData";
import Producer from "../producer/producer";

interface IAnomalies{
    [id : string] : RocketAnomalies
}
class TelemetryAnalyserService {

    rocketAnomalies : IAnomalies;
    producer: Producer;
    newAnomaly : RocketAnomalies | null ;
    ANOMALY_TOPIC = "anomaly_topic";


    constructor() {
        this.rocketAnomalies = {};
        this.producer = new Producer();
        this.newAnomaly = null;
    }

    getAnomalies(rocketId : string) : Anomaly[] {
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
        this.newAnomaly = this.rocketAnomalies[rocketData.getMissionId()].analyseRocketData(rocketData);
        if(this.newAnomaly != null) this.producer.sendAnomaly(this.newAnomaly,this.ANOMALY_TOPIC)
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
        this.newAnomaly = this.rocketAnomalies[boosterData.getMissionId()].analyseBoosterData(boosterData);
        if(this.newAnomaly != null) this.producer.sendAnomaly(this.newAnomaly,this.ANOMALY_TOPIC);
    }
}


export default new TelemetryAnalyserService();