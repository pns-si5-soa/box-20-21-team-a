import TelemetryAPI from "../../../main/API/telemetryAPI";
import expect from 'expect';
import RocketStatus from "../../../main/model/Rocket/RocketStatus";
import BoosterAPI from "../../../main/API/boosterAPI";

const {
    When,
    Then,
} = require('cucumber');

require('dotenv').config()


let response: any;

const telemetryAPI = new TelemetryAPI();
const boosterService = new BoosterAPI();

When("The rocket is launched", async function () {
    await boosterService.launchBoosterSOAPBack();
});

Then("The telemetry data are updated with the new value of rocket status", async function () {
    setInterval(expect((await telemetryAPI.getRocketData()).data.rocketStatus).toBe(RocketStatus.LAUNCHED),
        3500);
});

