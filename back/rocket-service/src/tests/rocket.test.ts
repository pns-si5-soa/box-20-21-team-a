import rocketService, {RocketStatus} from "../app/services/rocket-service"

test('Rocket status return test', () => {
    expect([RocketStatus.NOT_READY, RocketStatus.READY_FOR_LAUNCH].includes(parseInt(rocketService.getStatus(), 10))).toBe(true);
});

test('Rocket launch test', () => {
    expect(rocketService.launch()).toBe("Launching Rocket...");
    expect(parseInt(rocketService.getStatus(), 10)).toBe(RocketStatus.LAUNCHED);
});

test('Rocket stage test', () => {
    expect(rocketService.stageRocketMidFlight()).toBe("The module has been successfully staged!");
    expect(parseInt(rocketService.getStatus(), 10)).toBe(RocketStatus.IN_SECOND_STAGE);
});