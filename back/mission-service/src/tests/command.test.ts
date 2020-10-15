import mission from '../app/controller/MissionController';



test('create poll', () => {
	mission.createPoll(),
	expect(mission.getRocket()).toBe(false),
	expect(mission.getWeather()).toBe(false)
});


test('modify poll',() => {
	mission.createPoll();
	mission.modifyPoll("weather", true);
	expect(mission.getWeather()).toBe(true);
})

test('get rocket status',() => {
	mission.createPoll();
	mission.modifyPoll("rocket", true);
	expect(mission.getRocket()).toBe(true);
})

test('get weather status',() => {
	mission.createPoll();
	mission.modifyPoll("weather", true);
	expect(mission.getWeather()).toBe(true);
})