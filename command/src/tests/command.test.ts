import command from '../command';
import poll from '../entities/poll'


test('Command test', () => {
	command.createPoll(),
	expect(command.getPoll()?.rockets).toBe(false),
	expect(command.getPoll()?.weather).toBe(false)
});