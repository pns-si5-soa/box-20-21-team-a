import Poll from '../entities/poll';


class MissionService {
    poll!: Poll;

    constructor() {
    }

    createPoll(): Poll {
        this.poll = new Poll;
        return this.poll;

    }

    getPoll(): Poll {
        return this.poll;
    }

    modifyPoll(serviceName: string, answer: boolean): Poll {
        switch (serviceName) {
            case "weather":
                this.poll.setWeatherStatus(answer);
                return this.poll;
            case "rocket":
                this.poll.setRocketStatus(answer);
                return this.poll;
            case "mission":
                this.poll.setMissionStatus(answer);
                return this.poll;
            default:
                throw "The specified service name does not exist.";
        }
    }

    getRocket() : boolean {
        return this.poll.getRocketStatus();
    }

    getWeather() : boolean {
        return this.poll.getWeatherStatus();
    }

}

export default new MissionService();