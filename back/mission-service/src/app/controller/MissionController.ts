import Poll from '../entities/poll';
import Mission from "../entities/Mission";
import BoosterStatus from "../entities/BoosterStatus";
import BoosterData from "../entities/BoosterData";


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
        return this.mission.getPoll().getRocketStatus();
    }

    getWeather() : boolean {
        return this.mission.getPoll().getWeatherStatus();
    }

    getMissionStatusForBooster() : BoosterStatus {
        return this.mission.getBooster().boosterStatus;
    }


    modifyMissionStatusForBooster(booster : BoosterData) {
        return this.mission.modifyBooster(booster);
    }
}

export default new MissionController();
