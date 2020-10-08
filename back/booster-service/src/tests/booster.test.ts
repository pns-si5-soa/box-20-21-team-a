import BoosterData from "../app/entities/BoosterData"
import BoosterStatus from "../app/entities/BoosterStatus"


test('Launching booster', async () => {
    const booster = new BoosterData();
    booster.setTimer(1)
    let json = booster.toObjectJSON()
    expect(json.boosterStatus).toBe(BoosterStatus.NOT_LAUNCHED)
    await booster.launch();
    json = booster.toObjectJSON()
    expect(json.boosterStatus).toBe(BoosterStatus.LANDED)
});


test('Destroy booster', () => {
    const booster = new BoosterData();
    booster.setTimer(10)
    const json = booster.toObjectJSON()
    expect(json.boosterStatus).toBe(BoosterStatus.NOT_LAUNCHED)
    booster.launch()
    booster.destroy()
    expect(json.boosterStatus).not.toBe(BoosterStatus.DESTROYED)
});