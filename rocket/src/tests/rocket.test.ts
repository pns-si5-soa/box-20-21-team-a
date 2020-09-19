import rocket from "../rocket"

test('Rocket test ...', () => {
    expect(["ready", "not ready"]).toContain(rocket())
  });