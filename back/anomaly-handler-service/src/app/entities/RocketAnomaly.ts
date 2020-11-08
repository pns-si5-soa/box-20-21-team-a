import {AnomalyEnum} from "./Anomaly";


export default class RocketAnomaly {

    anomaly: AnomalyEnum;
    missionId: string;
    severity: number | undefined;

    constructor(missionId: string, anomaly: AnomalyEnum) {
        this.missionId = missionId;
        this.anomaly = anomaly;

    }

    anomalyIsCritical() {
        this.getAnomalySeverity();
        return this.severity === 3;
    }


    private getAnomalySeverity() {
        switch (this.anomaly) {
            case 0:
                this.severity = 2;
                break;
            case 1:
                this.severity = 2;
                break;
            case 2:
                this.severity = 3;
                break;
            default:
                this.severity = -1;
        }
    }
}