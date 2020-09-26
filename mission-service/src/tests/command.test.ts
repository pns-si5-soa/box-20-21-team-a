import mission from '../mission-service';



test('mission test', () => {
	mission.createPoll(),
	expect(mission.getRocket()).toBe(false),
	expect(mission.getWeather()).toBe(false)
});