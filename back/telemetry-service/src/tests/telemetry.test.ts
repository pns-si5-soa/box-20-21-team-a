import telemetryService from "../app/services/telemetry-service";
import RocketData from "../app/entities/Rocket/RocketData";
import {RocketStatus} from "../app/entities/Rocket/RocketStatus";

test('get rocket data test', () => {
    const testData = new RocketData();
    expect(telemetryService.getRocketData().getFuelLevel()).toBe(testData.getFuelLevel());
    expect(telemetryService.getRocketData().getRocketStatus()).toBe(testData.getRocketStatus());
});

test('add rocket data test', () => {
    const fuelLevel = 10;
    const length = telemetryService.rocketDataArray.length;
    let rocketData = new RocketData(RocketStatus.PAYLOAD_DELIVERED,fuelLevel);
    telemetryService.addRocketData(rocketData);
    expect(telemetryService.getRocketData().getRocketStatus()).toBe(RocketStatus.PAYLOAD_DELIVERED);
    expect(telemetryService.getRocketData().getFuelLevel()).toBe(fuelLevel);
    expect(telemetryService.rocketDataArray.length).toBe(length+1);
});
