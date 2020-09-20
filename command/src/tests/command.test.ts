import command = require('../command');


test('Command test', () => {
	command.createPoll(),
	expect(command.getPoll().rockets).toBe(false),
	expect(command.getPoll().weather).toBe(false)
});