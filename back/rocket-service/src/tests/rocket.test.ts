import rocketService from "../app/controller";
import RocketStatus from "../app/entities/RocketStatus";

test('Rocket launch test', async () => {
    await rocketService.launch();
    expect(rocketService.getStatus()).toBe(RocketStatus.LAUNCHED);
});

test('Rocket destroy test', async () => {
    await rocketService.destroy();
    expect(rocketService.getStatus()).toBe(RocketStatus.DESTROYED);
});