import Poll from '../entities/poll';
import Mission from "../entities/Mission";


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

}

export default new MissionController();
