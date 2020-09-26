import poll from "./entities/poll";


class MissionService {
	newPoll : poll | undefined;

	constructor() {
	}

	createPoll(): string {
		this.newPoll = new poll;
		return this.newPoll.toString();

	}

	getPoll(): string | undefined{
		return this.newPoll?.toString();
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

	getRocket(){
		return this.newPoll?.getRocket();
	}
	getWeather(){
		return this.newPoll?.getWeather();
	}

}

export default new MissionService();
