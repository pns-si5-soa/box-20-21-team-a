import RocketData from "../entities/Rocket/RocketData";
import BoosterData from "../entities/Booster/BoosterData";
import PayloadData from "../entities/Payload/PayloadData";

class TelemetryService {
    rocketDataArray: RocketData[];
    payloadDataArray: PayloadData[];

    constructor() {
        this.rocketDataArray = [];
        this.payloadDataArray = [];
        this.rocketDataArray.push(new RocketData());
        this.payloadDataArray.push(new PayloadData());
    }

    addRocketData(rocketData: RocketData): RocketData {
        this.rocketDataArray.push(rocketData);
        return rocketData;
    }

    getRocketData() {
        console.log("\t\t\t\t" + JSON.stringify(this.rocketDataArray[this.rocketDataArray.length - 1]));
        return this.rocketDataArray[this.rocketDataArray.length - 1];
    }

    addBoosterData(boosterData: BoosterData): BoosterData {
        const booster = Object.assign(new BoosterData(), boosterData);
        booster.save()
        return boosterData;
    }

    getBoosterData() {
        const boosterData = new BoosterData()
        return boosterData.findLastAndAssign()
    }

    addPayloadData(payloadData: PayloadData): PayloadData {
        this.payloadDataArray.push(payloadData);
        return payloadData;
    }

    getPayloadData() {
        console.log("\t\t\t\t" + JSON.stringify(this.payloadDataArray[this.payloadDataArray.length - 1]));
        return this.payloadDataArray[this.payloadDataArray.length - 1];
    }
}

export default new TelemetryService();