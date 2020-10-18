import Poll from "./poll";
import BoosterData from "./BoosterData";
import RocketStatus from "./RocketStatus";


export default class Mission {

    poll!: Poll;
    private boosterData: BoosterData; // FIXME @Thomas only booster status is useful, boosterData are useless!
    private rocketMissionStatus: RocketStatus;


    constructor() {
        this.boosterData = new BoosterData(); // FIXME no booster data!
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
    
    getBoosterMissionData() : BoosterData {
        return this.boosterData;
    }

    modifyBoosterData(booster: BoosterData){
        this.boosterData = booster;
    }

    getRocketMissionStatus() : RocketStatus {
        return this.rocketMissionStatus;
    }

    modifyRocketMissionStatus(rocketStatus: RocketStatus){
        this.rocketMissionStatus = rocketStatus;
    }
}