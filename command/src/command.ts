import poll = require("./entities/poll");

let newPoll : poll.default;

export function createPoll(): poll.default {
	newPoll = new poll.default();
	return newPoll;
}

export function getPoll(): poll.default{
	return newPoll;
}
