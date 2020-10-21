import RocketData from "../entities/Rocket/RocketData";
import BoosterData from "../entities/Booster/BoosterData";
import PayloadData from "../entities/Payload/PayloadData";
import Producer from "../producer/producer";

const producerKafka = new Producer();

class TelemetryController {

    async addRocketData(rocketData: RocketData) {
        producerKafka.sendMessage(rocketData, 'telemetry-rocket')
    }

    async addBoosterData(boosterData: BoosterData) {
        producerKafka.sendMessage(boosterData, 'telemetry-booster')
    }

    async addPayloadData(payloadData: PayloadData) {
        producerKafka.sendMessage(payloadData, 'telemetry-payload')
    }
}

export default new TelemetryController();