import weather from "../weather"


test('Test weather status...', () => {
  expect(["Sunny", "Cloudy", "Rainy"]).toContain(weather())
});