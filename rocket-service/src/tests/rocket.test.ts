import rocketService from "../rocket-service"

test('Rocket test ...', () => {
    expect(["ready", "not ready"]).toContain(rocketService.getStatus())
  });

test('Rocket launch test ...', () => {
  expect("Launching ...").toBe(rocketService.launch())
});