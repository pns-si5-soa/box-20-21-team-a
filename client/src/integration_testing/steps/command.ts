
const {
    When,
    Then,
} = require('cucumber');

import expect = require('expect');
import CommandAPI from '../../API/commandAPI';

let response: any;

const commandAPI = new CommandAPI();


When('I create a Go\\/No Go poll', async function ()
{
    response = await commandAPI.getCommandStatus().then(function(res)
    {
        return res;
    }).catch(function(err)
    {
        return err.response;
    });
})

Then("I receive a status code {int} and the parameters are {string} by default", async function(status: number, param: string)
    {
        expect(await response.status).toEqual(status)
        expect(await response.data).not.toBe(undefined)
        console.log(await response.data)
        expect(await response.data.rockets.toString()).toEqual(param);
        expect(await response.data.weather.toString()).toEqual(param);
    }

)