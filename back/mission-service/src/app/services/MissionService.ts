import Poll from '../entities/poll';


class MissionService {
    poll!: Poll;


    constructor() {
    }

    createPoll(): Poll {
        this.poll = new Poll;
        console.log("A poll was created");
        return this.poll;

    }

    getPoll(): Poll {
        return this.poll;
    }

    modifyPoll(serviceName: string, answer: boolean): Poll {
        switch (serviceName) {
            case "weather":
                this.poll.setWeatherStatus(answer);
                console.log("The weather response for the poll is "+answer);
                return this.poll;
            case "rocket":
                this.poll.setRocketStatus(answer);
                console.log("The rocket response for the poll is "+answer);
                return this.poll;
            case "mission":
                this.poll.setMissionStatus(answer);
                console.log("The mission response for the poll is "+answer);
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
