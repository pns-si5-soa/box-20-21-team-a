import TelemetryController from "../app/services/telemetry-controller";
import RocketData from "../app/entities/Rocket/RocketData";
import {RocketStatus} from "../app/entities/Rocket/RocketStatus";

test.skip('get rocket data test', () => {
    const testData = new RocketData();
    //expect(telemetryService.getRocketData().getFuelLevel()).toBe(testData.getFuelLevel());
    //expect(telemetryService.getRocketData().getRocketStatus()).toBe(testData.getRocketStatus());
});

test.skip('add rocket data test', async () => {
    const fuelLevel = 10;
    const length = TelemetryController.rocketDataArray.length;
    let rocketData = new RocketData(RocketStatus.LAUNCHED,fuelLevel);
    await TelemetryController.addRocketData(rocketData);
    // (telemetryService.getRocketData()).then( res => {
    //     console.log(res);
    //     //expect(res.data.rocketStatus).toBe(RocketStatus.LAUNCHED);
    // });
    //expect(telemetryService.getRocketData().getFuelLevel()).toBe(fuelLevel);
    expect(TelemetryController.rocketDataArray.length).toBe(length+1);
});
