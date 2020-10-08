import rocketService from "../app/services/rocket-service"
import RocketStatus from "../app/entities/RocketStatus"

test('Rocket status return test', () => {
    expect([RocketStatus.NOT_READY, RocketStatus.READY_FOR_LAUNCH].includes(rocketService.getStatus())).toBe(true);
});

test('Rocket launch test', () => {
    expect(rocketService.launch()).toBe("Launching Rocket...");
    expect(rocketService.getStatus()).toBe(RocketStatus.LAUNCHED);
});
