import poll from "./entities/poll";


class MissionService {
	newPoll : poll | undefined;

	constructor() {
	}

	createPoll(): string {
		this.newPoll = new poll;
		return this.newPoll.toString();

	}

	getPoll(): poll | undefined{
		return this.newPoll;
	}

	modifyPoll(serviceName:string, answer: boolean) : string|undefined{
		switch (serviceName) {
				case "weather":
					this.newPoll?.setWeather(answer);
					return this.newPoll?.toString();
				case "rocket":
					this.newPoll?.setRockets(answer);
					return this.newPoll?.toString();
				default:
					return "Service Name was wrong";
			}


	}

}

export default new MissionService();
