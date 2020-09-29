"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var weather_service_1 = __importDefault(require("../weather-service"));
test('Test weather status...', function () {
    expect(["Sunny", "Cloudy", "Rainy"]).toContain(weather_service_1.default());
});
