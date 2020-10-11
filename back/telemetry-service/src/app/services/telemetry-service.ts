import RocketData from "../entities/Rocket/RocketData";
import BoosterData from "../entities/Booster/BoosterData";
import PayloadData from "../entities/Payload/PayloadData";

class TelemetryService {
    rocketDataArray: RocketData[];
    boosterDataArray: BoosterData[];
    payloadDataArray: PayloadData[];

    constructor() {
        this.rocketDataArray = [];
        this.boosterDataArray = [];
        this.payloadDataArray = [];
        this.rocketDataArray.push(new RocketData());
        this.boosterDataArray.push(new BoosterData());
        this.payloadDataArray.push(new PayloadData());
    }

    addRocketData(rocketData: RocketData): RocketData {
        this.rocketDataArray.push(rocketData);
        return rocketData;
    }

    getRocketData() {
        console.log("\t\t\t\t" + JSON.stringify(this.rocketDataArray[this.rocketDataArray.length - 1].toObjectJSON()));
        return this.rocketDataArray[this.rocketDataArray.length - 1];
    }

    addBoosterData(boosterData: BoosterData): BoosterData {
        this.boosterDataArray.push(boosterData);
        return boosterData;
    }

    getBoosterData() {
        console.log("\t\t\t\t" + JSON.stringify(this.boosterDataArray[this.boosterDataArray.length - 1].toObjectJSON()));
        return this.boosterDataArray[this.boosterDataArray.length - 1];
    }

    addPayloadData(payloadData: PayloadData): PayloadData {
        this.payloadDataArray.push(payloadData);
        return payloadData;
    }

    getPayloadData() {
        console.log("\t\t\t\t" + JSON.stringify(this.payloadDataArray[this.payloadDataArray.length - 1].toObjectJSON()));
        return this.payloadDataArray[this.payloadDataArray.length - 1];
    }
}

export default new TelemetryService();