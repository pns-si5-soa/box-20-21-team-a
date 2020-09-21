const {
    When,
    Then,
} = require('cucumber');

import expect = require('expect');
import RocketAPI from '../../API/rocketAPI';

let response: any;

const rocketAPI = new RocketAPI();

When("I consult the current rocket status", async function () 
{
    response = await rocketAPI.getRocketStatus().then(function(res)
    {
        return res;
    }).catch(function(err)
    {  
        return err.response;
    });
})

Then("I receive a status code {int} and the rocket status is {string}", async function(status: number, status_string: String)
{   
    const rocket_status: Array<String> = status_string.split(',');
    expect(await response.status).toEqual(status)
    expect(await response.data).not.toBe(undefined)
    expect(rocket_status).toContain(await response.data)
})

