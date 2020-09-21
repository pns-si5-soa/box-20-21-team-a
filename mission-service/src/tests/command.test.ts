import mission from '../mission-service';



test('mission test', () => {
	mission.createPoll(),
	expect(mission.getPoll()?.rockets).toBe(false),
	expect(mission.getPoll()?.weather).toBe(false)
});