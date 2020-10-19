import Poll from '../entities/poll';
import Mission from "../entities/Mission";
import BoosterStatus from "../entities/Booster/BoosterStatus";
import RocketStatus from "../entities/Rocket/RocketStatus";
import BoosterDataMission from "../entities/Booster/BoosterDataMission";
import RocketDataMission from "../entities/Rocket/RocketDataMission";
import Producer from '../producer/producer';


class MissionController {

    mission : Mission;
    producerKafka : Producer;


    constructor() {
        this.mission = new Mission();
        this.producerKafka = new Producer();
    }

    createPoll(): Poll {
        return this.mission.createPoll();
    }

    getPoll(): Poll {
        return this.mission.getPoll();
    }

    modifyPoll(serviceName: string, answer: boolean): Poll {
        return this.mission.modifyPoll(serviceName, answer);
    }

    getRocket() : boolean {
        return this.mission.getPoll().getRocketResponse();
    }

    getWeather() : boolean {
        return this.mission.getPoll().getWeatherResponse();
    }

    getMissionStatusForBooster() : BoosterStatus {
        return this.mission.getBoosterMissionStatus();
    }

    async modifyMissionStatusForBooster(boosterData : BoosterDataMission) {
        await this.producerKafka.sendMissionStatus(boosterData,'booster-topic');
        const booster = Object.assign(new BoosterDataMission(), boosterData);
        console.log(booster)
        booster.save()
        return booster;
    }

    getMissionStatusForRocket() : RocketStatus {
        return this.mission.getRocketMissionStatus();
    }

    async modifyMissionStatusForRocket(rocketStatus : RocketDataMission) {
        await this.producerKafka.sendMissionStatus(rocketStatus,'rocket-topic');
        const rocket = Object.assign(new RocketDataMission(), rocketStatus);
        console.log(rocket)
        rocket.save()
        return rocket;
    }
}

export default new MissionController();
