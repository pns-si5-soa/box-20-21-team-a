import mission from '../app/controller/MissionController';
import Mission from '../app/entities/Mission';
import Poll from '../app/entities/poll';



test('create poll', () => {
	var poll = new Poll();
	
	expect(poll.rocketStatus).toBe(false),
	expect(poll.missionStatus).toBe(false),
	expect(poll.weatherStatus).toBe(false)
});

/*
test('modify poll',() => {
	mission.createPoll(0);
	mission.modifyPoll("weather", true,0);
	expect(mission.getWeather(0)).toBe(true);
})

test('get rocket status',() => {
	mission.createPoll(0);
	mission.modifyPoll("rocket", true,0);
	expect(mission.getRocket(0)).toBe(true);
})

test('get weather status',() => {
	mission.createPoll(0);
	mission.modifyPoll("weather", true,0);
	expect(mission.getWeather(0)).toBe(true);
})*/