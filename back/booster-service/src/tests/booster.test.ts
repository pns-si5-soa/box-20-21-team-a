import BoosterData from "../app/entities/BoosterData"
import Booster from "../app/entities/Booster";
import BoosterStatus from "../app/entities/BoosterStatus";

test.skip('Launching booster', async () => {
    const boosterService = new Booster(new BoosterData("123"));
    boosterService.setTimer(1)
    let json = boosterService.booster.toObjectJSON()
    expect(json.boosterStatus).toBe(BoosterStatus.ON_THE_ROCKET)
    await boosterService.launch();
    json = boosterService.booster.toObjectJSON()
    expect(json.boosterStatus).toBe(BoosterStatus.LANDED)
});


test('Destroy booster', () => {
    const boosterService = new Booster(new BoosterData("123"));
    boosterService.setTimer(10);
    const json = boosterService.booster.toObjectJSON();
    expect(json.boosterStatus).toBe(BoosterStatus.ON_THE_ROCKET);
    boosterService.launch();
    boosterService.destroy();
    expect(json.boosterStatus).not.toBe(BoosterStatus.DESTROYED);
});