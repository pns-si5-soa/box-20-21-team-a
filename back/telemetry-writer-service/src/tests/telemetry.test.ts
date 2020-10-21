import RocketData from "../app/entities/Rocket/RocketData";
import {RocketStatus} from "../app/entities/Rocket/RocketStatus";
import telemetryController from "../app/services/telemetry-controller";

test.skip('get rocket data test', () => {
    const testData = new RocketData();
    //expect(telemetryService.getRocketData().getFuelLevel()).toBe(testData.getFuelLevel());
    //expect(telemetryService.getRocketData().getRocketStatus()).toBe(testData.getRocketStatus());
});

test.skip('add rocket data test', async () => {
    const fuelLevel = 10;
    const length = telemetryController.rocketDataArray.length;
    let rocketData = new RocketData(RocketStatus.LAUNCHED,fuelLevel);
    await telemetryController.addRocketData(rocketData);
    (telemetryController.getRocketData()).then( res => {
        console.log(res);
        //expect(res.data.rocketStatus).toBe(RocketStatus.LAUNCHED);
    });
    //expect(telemetryService.getRocketData().getFuelLevel()).toBe(fuelLevel);
    expect(telemetryController.rocketDataArray.length).toBe(length+1);
});
