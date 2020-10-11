import TelemetryAPI from "../../../main/API/telemetryAPI";

const {
    When,
    Then,
} = require('cucumber');

require('dotenv').config()

import expect from 'expect';
import RocketAPI from "../../../main/API/rocketAPI";
import RocketStatus from "../../../main/model/Rocket/RocketStatus";
import BoosterAPI from "../../../main/API/boosterAPI";
import {BoosterStatus} from "../../../main/model/Booster/BoosterStatus";


let response: any;

const telemetryAPI = new TelemetryAPI();
const boosterService = new BoosterAPI();

When("The rocket is launched", async function ()
{

    await boosterService.launchBoosterSOAP().then(function(res)
    {
        return res;
    }).catch(function(err)
    {
        return err.response;
    });
})

Then("The telemetry data are updated with the new value of rocket status", async function()
{
    expect((await telemetryAPI.getRocketData()).data.rocketStatus).toBe(RocketStatus.LAUNCHED);
})

