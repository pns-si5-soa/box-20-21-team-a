import poll from "./entities/poll";


class command {
	newPoll : poll | undefined;

	constructor() {
	}

	createPoll(): poll {
		this.newPoll = new poll;
		return this.newPoll;
	}

	getPoll(): poll | undefined{
		return this.newPoll;
	}

}

export default new command();
