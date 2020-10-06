import telemetryService from "../app/services/telemetry-service";
import TelemetryData from "../app/entities/telemetryData";
import {RocketStatus} from "../app/entities/RocketStatus";

test('get default data test', () => {
    const testData = new TelemetryData();
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
