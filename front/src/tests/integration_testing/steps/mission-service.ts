
const {
    When,
    Then,
} = require('cucumber');

require('dotenv').config()

import expect from 'expect';
import MissionAPI from '../../../main/API/rest/missionAPI';
import MissionsCoordinatorAPI from '../../../main/API/rest/missionsCoordinatorAPI';

let response: any;

const missionAPI = new MissionAPI();
const missionsCoordinatorAPI = new MissionsCoordinatorAPI();

When('I create a Go\\/No Go poll', async function ()
{
    response = await missionAPI.createPoll().then(function(res)
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
        expect((await response.data).rocketStatus.toString()).toEqual(param);
        expect((await response.data).weatherStatus.toString()).toEqual(param);
    }
)

When('I received a {string} answer from rocket service,I modify the poll', async function (answer : string)
{
    const missionId = await missionAPI.createPoll().then((res) => {
        return missionsCoordinatorAPI.getMissions().then((res) =>{
            return res.data;
        });
    }).catch(err => {
        console.error('There is an error : ', err);
    })
    response = await missionAPI.modifyPoll("rocket", answer,missionId).then(function(res)
    {
        return res;
    }).catch(function(err)
    {
        return err.response;
    });

})

Then("The new rocket status is {string}", async function(status: string)
    {
        expect((await missionAPI.getPoll()).data.rocketStatus.toString()).toEqual(status);
    }
)


When('I received a {string} answer from weather service,I modify the poll', async function (answer : string)
{
    const missionId = await missionAPI.createPoll().then((res) => {
        return missionsCoordinatorAPI.getMissions().then((res) =>{
            return res.data;
        });
    }).catch(err => {
        console.error('There is an error : ', err);
    })
    response = await missionAPI.modifyPoll("weather", answer,missionId).then(function(res)
    {
        return res;
    }).catch(function(err)
    {
        return err.response;
    });

})

Then("The new weather status is {string}", async function(status: boolean)
    {
        expect((await missionAPI.getPoll()).data.weatherStatus.toString()).toEqual(status);
    }
)