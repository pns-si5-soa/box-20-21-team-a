import RocketData from "../entities/Rocket/RocketData";
import BoosterData from "../entities/Booster/BoosterData";
import PayloadData from "../entities/Payload/PayloadData";
import { find } from "../db/Mongo";

class TelemetryController {

    addRocketData(rocketData: RocketData): RocketData {
        const rocket = Object.assign(new RocketData(), rocketData);
        rocket.save()
        return rocketData;
    }

    getRocketData(filter: Object = {}) {
        const rocketData = new RocketData()
        return rocketData.findLastAndAssign(filter)
    }

    addBoosterData(boosterData: BoosterData): BoosterData {
        //TODO mettre dans la route
        
        const booster = Object.assign(new BoosterData(), boosterData);
        booster.save()
        return boosterData;
    }

    getBoosterData(filter: Object = {}) {
        const boosterData = new BoosterData()
        return boosterData.findLastAndAssign(filter)
    }

    getAllBoosterData(filter: Object = {}) {
        return find("BoosterData", filter)
    }

    getAllRocketData(filter: Object = {}) {
        return find("RocketData", filter)
    }

    getAllPayloadData(filter: Object = {}) {
        return find("PayloadData", filter)
    }

    addPayloadData(payloadData: PayloadData): PayloadData {
        const payload = Object.assign(new PayloadData(), payloadData);
        payload.save()
        return payload;
    }

    getPayloadData(filter: Object = {}) {
        const payloadData = new PayloadData()
        return payloadData.findLastAndAssign(filter)
    }
}

export default new TelemetryController();