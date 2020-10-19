
const {
    When,
    Then,
    And
} = require('cucumber');

require('dotenv').config()

import expect from 'expect';
import TelemetryAPI from '../../../main/API/rest/telemetryAPI';
import PayloadAPI from '../../../main/API/soap/node-calls/payloadAPI';
import PayloadData from '../../../main/model/Payload/PayloadData';
import PayloadStatus, { mapStatusToText } from '../../../main/model/Payload/PayloadStatus';
import { setIntervalConditionPromise } from '../../../main/tools/set_intervalx';

let response: any;

const payloadAPI = new PayloadAPI();
const telemetryAPI = new TelemetryAPI();


When('I detach the payload', async function ()
{
    await payloadAPI.deliverPayloadSOAPBack().then(function(res)
    {
        return res;
    }).catch(function(err)
    {
        return err.response;
    });
})

Then("the payload is firstly going to have the status {string}", async function(status : String){
var responseData : PayloadData  ;
var payloadStatus : PayloadStatus = PayloadStatus.ATTACHED;

    await setIntervalConditionPromise(function(){
        telemetryAPI.getPayloadData().then(function(res){
            responseData = res.data;
            payloadStatus = responseData.payloadStatus
        }).catch(function(err)
        {
            return err.response;
        });
        },1000,function(){
            return mapStatusToText[payloadStatus] == status;

        }
    )

expect(mapStatusToText[payloadStatus]).toEqual(status);
    }
)
Then('finally it\'s going to be {string}', {timeout: 5 * 5000},async function(status : String){
    var responseData : PayloadData  ;
        var payloadStatus : PayloadStatus = PayloadStatus.ATTACHED;

            await setIntervalConditionPromise(function(){
                telemetryAPI.getPayloadData().then(function(res){
                    responseData = res.data;
                    payloadStatus = responseData.payloadStatus
                }).catch(function(err)
                {
                    return err.response;
                });
                },1000,function(){
                    return mapStatusToText[payloadStatus] == status;
    
                }
            )
        
        expect(mapStatusToText[payloadStatus]).toEqual(status);


}
)
