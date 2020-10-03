const {
    When,
    Then,
} = require('cucumber');

require('dotenv').config()

import expect from 'expect';
import RocketAPI from '../../../main/API/rocketAPI';

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


// Second scenario

When("The Chief of the Rocket department launches the rocket for the first time", async function () 
{
    response = await rocketAPI.launchRocket().then(function(res)
    {
        return res;
    }).catch(function(err)
    {  
        return err.response;
    });
})

Then("He receives a status code {int} and the rocket launched status is {string}", async function(status: number, status_string: String)
{   
    expect(await response.status).toEqual(status)
    expect(await response.data).not.toBe(undefined)
    expect(status_string).toBe(await response.data)
})