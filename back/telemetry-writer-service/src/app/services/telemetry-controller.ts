import RocketData from "../entities/Rocket/RocketData";
import BoosterData from "../entities/Booster/BoosterData";
import PayloadData from "../entities/Payload/PayloadData";

class TelemetryController {

    addRocketData(rocketData: RocketData): RocketData {
        const rocket = Object.assign(new RocketData(), rocketData);
        console.log(rocket)
        rocket.save()
        return rocketData;
    }

    getRocketData() {
        const rocketData = new RocketData()
        return rocketData.findLastAndAssign()
    }

    addBoosterData(boosterData: BoosterData): BoosterData {
        //TODO mettre dans la route
        const booster = Object.assign(new BoosterData(), boosterData);
        console.log(boosterData)
        booster.save()
        return boosterData;
    }

    async getBoosterData() {
        const boosterData = new BoosterData()
        console.log(await boosterData.findLastAndAssign())
        return boosterData.findLastAndAssign()
    }

    addPayloadData(payloadData: PayloadData): PayloadData {
        const payload = Object.assign(new PayloadData(), payloadData);
        console.log(payload)
        payload.save()
        return payload;
    }

    getPayloadData() {
        const payloadData = new PayloadData()
        return payloadData.findLastAndAssign()
    }
}

export default new TelemetryController();