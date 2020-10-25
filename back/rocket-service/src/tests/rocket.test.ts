import rocketService from "../app/controller";
import RocketStatus from "../app/entities/RocketStatus";

test('On internal power launch test', async () => {
    rocketService.addNewRocket(0);
    await rocketService.putRocketOnInternalPower(0);
    expect(rocketService.getStatus(0)).toBe(RocketStatus.ON_INTERNAL_POWER);
});

test('Rocket destroy test', async () => {
    await rocketService.destroy(0);
    expect(rocketService.getStatus(0)).toBe(RocketStatus.DESTROYED);
});