import rocketService from "../app/controller";
import RocketStatus from "../app/entities/RocketStatus";

test('On internal power launch test', async () => {
    await rocketService.putRocketOnInternalPower();
    expect(rocketService.getStatus()).toBe(RocketStatus.ON_INTERNAL_POWER);
});

test('Rocket destroy test', async () => {
    await rocketService.destroy();
    expect(rocketService.getStatus()).toBe(RocketStatus.DESTROYED);
});