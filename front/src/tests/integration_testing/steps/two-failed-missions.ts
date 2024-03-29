require('dotenv').config()
import "logs-module"
const assert = require('assert')


const {
	When,
	Then,
	Given,
} = require('@cucumber/cucumber');

import expect from 'expect';
import TelemetryAPI from "../../../main/API/rest/telemetryAPI";
import { AxiosPromise } from "axios";
import BoosterData from "../../../main/model/Booster/BoosterData";
import PayloadData from "../../../main/model/Payload/PayloadData";
import RocketData from "../../../main/model/Rocket/RocketData";
import WeatherAPI from "../../../main/API/rest/weatherAPI";
import RocketAPI from "../../../main/API/soap/node-calls/rocketAPI";
import RocketRESTAPI from "../../../main/API/rest/rocketAPI";
import AnomalyAPI from "../../../main/API/rest/anomalyAPI";
import RealTimeAPI from "../../../main/API/rest/realTimeAPI";
import MissionsCoordinatorAPI from "../../../main/API/rest/missionsCoordinatorAPI";
import { RocketStatus, mapStatusToText as  mapStatusToTextRocket} from '../../../main/model/Rocket/RocketStatus';
import { BoosterStatus, mapStatusToText } from '../../../main/model/Booster/BoosterStatus';
import { setIntervalConditionPromise } from '../../../main/tools/set_intervalx';

const missionsCoordinatorAPI = new MissionsCoordinatorAPI();
const telemetryAPI = new TelemetryAPI();
const weatherAPI = new WeatherAPI();
const rocketAPI = new RocketAPI();
const anomalyAPI = new AnomalyAPI();
const rocketRESTAPI = new RocketRESTAPI();
const realTimeAPI = new RealTimeAPI();

let missions :string [] =[];
// // The “given” condition for our test scenario // //


Given("three missions which have passed all required controls before the launch procedure",async function () {

    console.log("-------------------------------------------------------")
    console.log("|                                                     |")
    console.log("|                                                     |")
    console.log("|                                                     |")
    console.log("|                                                     |")
    console.log("|                   SCENARIO    2                     |")
    console.log("|                                                     |")
    console.log("|                                                     |")
    console.log("|                                                     |")
    console.log("|                                                     |")
    console.log("-------------------------------------------------------")
    console.log("\n\n")
    console.log("Given three missions which have passed all required controls before the launch procedure");
    await missionsCoordinatorAPI.createMission();
    await missionsCoordinatorAPI.createMission();
   
});

Given("the rocket has been launched for each mission",async function () {
    console.log("And the rocket has been launched for each mission");
    await missionsCoordinatorAPI.getMissions().then((res)=>{
        missions = res.data;
        missions.forEach(id =>{
            rocketAPI.initializeStartupProcess(id);
            rocketAPI.putRocketOnInternalPower(id);
        })  
    })

    
});

Given("the first mission has its rocket still attached to the booster", function () {
    console.log("And the first mission has its rocket still attached to the booster");
});
Given('the second mission has already its rocket and its booster detached from each other', function () {
    console.log("And the second mission has already its rocket and its booster detached from each other");
    // Write code here that turns the phrase above into concrete actions
   // return 'pending';
  });
Given('the third mission has already its rocket and its booster detached from each other', function () {
    console.log("And the third mission has already its rocket and its booster detached from each other");
    // Write code here that turns the phrase above into concrete actions
   // return 'pending';
  });

    

When("the anomaly {string} which has a severity of 3 is detected in the first mission's rocket",{timeout: 15 * 5000},async function(anomaly:string) {
  console.log("  When the anomaly 'skyfall' which has a severity of 3 is detected in the first mission's rocket");
    let status : RocketStatus;
    // Wait forrocket on internal power
    await setIntervalConditionPromise(function(){
        realTimeAPI.getStatus(missions[missions.length-1]).then((res)=>{
            status = res.data.rocket;
        })
        },1000,function(){
            return status >= RocketStatus.LAUNCHED ;
        }
    )
    rocketRESTAPI.makeRocketFall(missions[missions.length-1]).then(res=>{
        
    }).catch(err=>{
       
    });
});

Then("the mission is immediately aborted which causes the head stage status to change to {string}",{timeout: 5 * 5000}, async function(status:string) {
    console.log("Then the mission is immediately aborted which causes the head stage status to change to 'Destroyed :('");
    var rocketStatusTemp : RocketStatus = RocketStatus.ON_INTERNAL_POWER;
    await setIntervalConditionPromise(function(){
        realTimeAPI.getStatus(missions[missions.length-1]).then((res)=>{
            rocketStatusTemp = res.data.rocket;
        })
        },1000,function(){
            return mapStatusToTextRocket[rocketStatusTemp] == status;
        }
    )
    expect(mapStatusToTextRocket[rocketStatusTemp]).toEqual(status);
});

Then('the booster is immediatly {string}', {timeout: 5 * 5000},async function(status : string){
    console.log("And the booster is immediatly 'Destroyed :('");
    var boosterStatus : BoosterStatus = BoosterStatus.ON_THE_ROCKET;
    await setIntervalConditionPromise(function(){
        realTimeAPI.getStatus(missions[missions.length-1]).then(function(res){
            
            boosterStatus = res.data.booster
        }).catch(function(err)
        {
            return err.response;
        });
        },1000,function(){
            return mapStatusToText[boosterStatus] == status;
        }
    )
    expect(mapStatusToText[boosterStatus]).toEqual(status);
}
)
  
When("the anomaly {string} which has a severity of 3 is detected in the second mission's rocket",{timeout: 15 * 5000},async function(anomaly:string) {
    console.log("When the anomaly 'skyfall' which has a severity of 3 is detected in the second mission's rocket");
    let status : RocketStatus;
    // Wait forrocket on internal power
    await setIntervalConditionPromise(function(){
        realTimeAPI.getStatus(missions[missions.length-2]).then((res)=>{
            status = res.data.rocket;
        })
        },1000,function(){
            return status >= RocketStatus.SECOND_ENGINE_START ;
        }
    )
    
    rocketRESTAPI.makeRocketFall(missions[missions.length-2]).then(res=>{
    }).catch(err=>{
       
    });
 });

 Then("the second mission is immediately aborted which causes the head stage status to change to {string}",{timeout: 5 * 5000}, async function(status:string) {
    console.log("Then the second mission is immediately aborted which causes the head stage status to change to 'Destroyed :('");
    var rocketStatusTemp : RocketStatus = RocketStatus.ON_INTERNAL_POWER;
    await setIntervalConditionPromise(function(){
        realTimeAPI.getStatus(missions[missions.length-2]).then((res)=>{
            rocketStatusTemp = res.data.rocket;

        })
        },1000,function(){
            return mapStatusToTextRocket[rocketStatusTemp] == status;
        }
    )
    expect(mapStatusToTextRocket[rocketStatusTemp]).toEqual(status);
});

Then('the booster continues its landing process normally and finally has the {string} status', {timeout: 50 * 5000},async function(status : string){
    console.log("And the booster continues its landing process normally and finally has the 'Landed' status");
    var responseData;
    var boosterStatus : BoosterStatus = BoosterStatus.ON_THE_ROCKET;

    await setIntervalConditionPromise(function(){
        realTimeAPI.getStatus(missions[missions.length-2]).then(function(res){
            boosterStatus = res.data.booster
        }).catch(function(err)
        {
            return err.response;
        });
        },5000,function(){
            return mapStatusToText[boosterStatus] == status;
        }
    )
    expect(mapStatusToText[boosterStatus]).toEqual(status);
}
)
Then('after the failure of the mission Jeff wants to see where the problem was, so he looks at the telemetries of the rocket', {timeout: 50 * 5000},async function(){
   console.log("And after the failure of the mission Jeff wants to see where the problem was, so he looks at the telemetries of the rocket");
    telemetryAPI.getAllRocketData(missions[missions.length-2]).then((res)=>{
    expect(res.data.length).toBeGreaterThan(0);
       
   })
}
)




