import Poll from "../entities/Poll";

interface IPolls{
    [id : string] : Poll
}
class PollController {
    polls : IPolls;
    
    constructor() {
        this.polls = {}

    }

    addNewPoll(missionId :string) : string{
        console.log("poll : "+missionId+" created");
        let poll = new Poll();
           this.polls[missionId] = poll;
        return missionId; 
    }

    modifyPoll(serviceName: string, answer: boolean,id:string): Poll {
        switch (serviceName) {
            case "weather":
                this.polls[id].setWeatherStatus(answer);
                console.log("The weather department response for the poll is "+answer);
                return this.polls[id];
            case "rocket":
                this.polls[id].setRocketStatus(answer);
                console.log("The rocket department response for the poll is "+answer);
                return this.polls[id];
            case "mission":
                this.polls[id].setMissionStatus(answer);
                console.log("The mission department response for the poll is "+answer);
                return this.polls[id];
            default:
                throw "The specified service name does not exist.";
        }
    }

    getPoll(missionId :string) : Poll{
        return this.polls[missionId];
    }

    
}

export default new PollController();