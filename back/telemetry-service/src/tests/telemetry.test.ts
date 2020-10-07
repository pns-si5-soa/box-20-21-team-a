import telemetryService from "../app/services/telemetry-service";
import RocketData from "../app/entities/Rocket/RocketData";
import {RocketStatus} from "../app/entities/Rocket/RocketStatus";

test('get default data test', () => {
    const testData = new RocketData();
    expect(telemetryService.getData().getFuelLevel()).toBe(testData.getFuelLevel());
    expect(telemetryService.getData().getRocketStatus()).toBe(testData.getRocketStatus());
});

test('add data test', () => {
    const fuelLevel = 10;
    const length = telemetryService.telemetryDataArray.length;
    telemetryService.addData(RocketStatus.PAYLOAD_DELIVERED,fuelLevel);
    expect(telemetryService.getData().getRocketStatus()).toBe(RocketStatus.PAYLOAD_DELIVERED);
    expect(telemetryService.getData().getFuelLevel()).toBe(fuelLevel);
    expect(telemetryService.telemetryDataArray.length).toBe(length+1);
});
