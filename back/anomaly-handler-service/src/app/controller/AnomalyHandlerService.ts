import {AnomalyEnum} from '../entities/Anomaly'
import RocketAnomaly from "../entities/RocketAnomaly";
import MissionAPI from "../API/missionAPI";
import BoosterAPI from "../API/boosterAPI";
import RocketAPI from "../API/rocketAPI";
import RocketStatus from "../entities/RocketStatus";

const missionAPI = new MissionAPI();
const boosterAPI = new BoosterAPI();
const rocketAPI = new RocketAPI();

class AnomalyAnalyserService {


    constructor() {
    }

    analyseAnomaly(id : string, anomaly : AnomalyEnum){
        let newAnomaly = new RocketAnomaly(id, anomaly);
        console.log("New anomaly detected... Checking criticality")
        if (newAnomaly.anomalyIsCritical()){
            console.log("Anomaly critical, destruction of the rocket")
            rocketAPI.destroyRocketSOAPBack(id);
        }
    }

}


export default new AnomalyAnalyserService();