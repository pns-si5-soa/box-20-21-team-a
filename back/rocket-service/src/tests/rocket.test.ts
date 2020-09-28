import rocketService from "../rocket-service"

test('Rocket status return test', () => {
    expect(["Ready", "Not ready"].includes(rocketService.getStatus())).toBe(true);
  });

test('Rocket launch test', () => {
  expect(rocketService.launch()).toBe("Launching Rocket...");
});