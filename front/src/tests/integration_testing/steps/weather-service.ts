const {
    When,
    Then,
} = require('cucumber');

require('dotenv').config()

import expect from 'expect';
import WeatherAPI from '../../../main/API/weatherAPI';

let response: any;

const weatherAPI = new WeatherAPI();

When("I consult the current weather", async function () 
{
    response = await weatherAPI.getWeather().then(function(res)
    {
        return res;
    }).catch(function(err)
    {  
        return err.response;
    });
})

Then("I receive a status code {int} and the weather in {string}", async function(status: number, weathers_string: String)
{   
    const weathers: Array<String> = weathers_string.split(',');
    expect(await response.status).toEqual(status)
    expect(await response.data).not.toBe(undefined)
    expect(weathers).toContain(await response.data)
})

