import weather from "../app/services/weather-service"


test('Test weather status...', () => {
  expect(["Sunny", "Cloudy", "Rainy"]).toContain(weather())
});