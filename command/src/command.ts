import poll from "./entities/poll";

let newPoll : poll;

export function createPoll(): poll {
	newPoll = new poll;
	return newPoll;
}

export function getPoll(): poll{
	return newPoll;
}
