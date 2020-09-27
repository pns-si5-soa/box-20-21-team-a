import Poll from './entities/poll';


class MissionService {
    poll: Poll | undefined;

    constructor() {
    }

    createPoll(): string {
        this.poll = new Poll;
        return this.poll.toString();

    }

    getPoll(): string | undefined {
        return this.poll?.toString();
    }

    modifyPoll(serviceName: string, answer: boolean): string | undefined {
        switch (serviceName) {
            case "weather":
                this.poll?.setWeatherStatus(answer);
                return this.poll?.toString();
            case "rocket":
                this.poll?.setRocketStatus(answer);
                return this.poll?.toString();
            case "mission":
                this.poll?.setMissionStatus(answer);
                return this.poll?.toString();
            default:
                return "The specified service name does not exist.";
        }
    }

    getRocket() {
        return this.poll?.getRocketStatus();
    }

    getWeather() {
        return this.poll?.getWeatherStatus();
    }

}

export default new MissionService();
