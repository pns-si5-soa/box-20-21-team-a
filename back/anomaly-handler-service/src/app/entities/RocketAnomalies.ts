import {Anomaly} from "./Anomaly";
import RocketData from "./Rocket/RocketData";
import BoosterData from "./Booster/BoosterData";


export default class RocketAnomalies{

    anomalies : Anomaly[];
    missionId : string;

    constructor(missionId : string) {
        this.missionId = missionId;
        this.anomalies = [];
    }


}
