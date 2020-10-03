import rocketService from "../app/services/rocket-service"

test('Rocket status return test', () => {
    expect(["Ready", "Not ready"].includes(rocketService.getStatus())).toBe(true);
  });

test('Rocket launch test', () => {
  expect(rocketService.launch()).toBe("Launching Rocket...");
});

test('Rocket stage test', () => {
    expect(rocketService.stageRocketMidFlight()).toBe("The module has been successfully staged!");
});