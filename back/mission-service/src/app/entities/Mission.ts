import Poll from "./poll";
import RocketStatus from "./Rocket/RocketStatus";
import BoosterStatus from "./Booster/BoosterStatus";


export default class Mission{

    poll!: Poll;
    private boosterMissionStatus: BoosterStatus;
    private rocketMissionStatus: RocketStatus;


    constructor() {
        this.boosterMissionStatus = BoosterStatus.ON_THE_ROCKET;
        this.rocketMissionStatus = RocketStatus.PREPARATION;
    }

    createPoll(): Poll {
        this.poll = new Poll();
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
                console.log("The weather department response for the poll is "+answer);
                return this.poll;
            case "rocket":
                this.poll.setRocketStatus(answer);
                console.log("The rocket department response for the poll is "+answer);
                return this.poll;
            case "mission":
                this.poll.setMissionStatus(answer);
                console.log("The mission department response for the poll is "+answer);
                return this.poll;
            default:
                throw "The specified service name does not exist.";
        }
    }

    getRocketDepartmentResponse() : boolean {
        return this.poll.getRocketResponse();
    }

    getWeatherDepartmentResponse() : boolean {
        return this.poll.getWeatherResponse();
    }

    getBoosterMissionStatus() : BoosterStatus {
        return this.boosterMissionStatus;
    }

    modifyBoosterMissionStatus(boosterStatus: BoosterStatus){
        this.boosterMissionStatus = boosterStatus;
    }

    getRocketMissionStatus() : RocketStatus {
        return this.rocketMissionStatus;
    }

    modifyRocketMissionStatus(rocketStatus: RocketStatus){
        this.rocketMissionStatus = rocketStatus;
    }

    getRocketMissionStatus() : RocketStatus {
        return this.rocketMissionStatus;
    }

    modifyRocketMissionStatus(rocketStatus: RocketStatus){
        this.rocketMissionStatus = rocketStatus;
    }
}