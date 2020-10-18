import Poll from '../entities/poll';
import Mission from "../entities/Mission";
import BoosterStatus from "../entities/BoosterStatus";
import BoosterData from "../entities/BoosterData";
import RocketStatus from "../entities/RocketStatus";


class MissionController {

    mission : Mission;

    constructor() {
        this.mission = new Mission();
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
        return this.mission.getBoosterMissionData().boosterStatus;
    }

    modifyMissionStatusForBooster(boosterData : BoosterData) {
        return this.mission.modifyBoosterData(boosterData); // FIXME @Thomas Why boosterData? You don't need BoosterData, only BoosterStatus
    }

    getMissionStatusForRocket() : RocketStatus {
        return this.mission.getRocketMissionStatus();
    }

    modifyMissionStatusForRocket(rocketStatus : RocketStatus) {
        return this.mission.modifyRocketMissionStatus(rocketStatus);
    }
}

export default new MissionController();
