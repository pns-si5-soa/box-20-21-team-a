export enum anomaly {
    NOTHING,
    BOOSTER_FUEL_EMPTY,
    ROCKET_FUEL_EMPTY,
    ROCKET_FALLING,
}

class AnomalyAnalyserService {

    anomalies : anomaly[];

    constructor() {
        this.anomalies.push(anomaly.NOTHING);
    }

    getAnomalies() : anomaly[] {
        return this.anomalies;
    }


}


export default new AnomalyAnalyserService();