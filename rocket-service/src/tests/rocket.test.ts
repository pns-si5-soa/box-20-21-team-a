import rocket from "../rocket-service"

test('Rocket test ...', () => {
    expect(["ready", "not ready"]).toContain(rocket())
  });