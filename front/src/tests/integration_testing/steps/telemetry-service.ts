import TelemetryAPI from "../../../main/API/telemetryAPI";

const {
    When,
    Then,
} = require('cucumber');

require('dotenv').config()

import expect from 'expect';
import RocketAPI from "../../../main/API/rocketAPI";
import {RocketStatus} from "../../../main/model/Rocket/RocketStatus";


let response: any;

const telemetryAPI = new TelemetryAPI();
const rocketService = new RocketAPI();

When("The rocket is launched", async function ()
{

    await rocketService.launchRocket().then(function(res)
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

