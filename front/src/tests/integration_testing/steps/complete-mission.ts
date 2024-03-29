require('dotenv').config()
import "logs-module"
import {BoosterStatus, mapStatusToText as mapStatusToTextBooster} from "../../../main/model/Booster/BoosterStatus";
import RocketStatus, {mapStatusToText} from "../../../main/model/Rocket/RocketStatus";
import RocketAPISoap from "../../../main/API/soap/node-calls/rocketAPI";
import RealTimeAPI from "../../../main/API/rest/realTimeAPI";
import {setIntervalConditionPromise, setIntervalPromiseX} from "../../../main/tools/set_intervalx";
import PayloadAPI from "../../../main/API/soap/node-calls/payloadAPI";
import MissionsCoordinatorAPI from "../../../main/API/rest/missionsCoordinatorAPI";
import PollAPI from "../../../main/API/rest/pollAPI";
import Poll from "../../../main/model/Poll";
import expect from 'expect';
import TelemetryAPI from "../../../main/API/rest/telemetryAPI";
import {AxiosPromise} from "axios";
import BoosterData from "../../../main/model/Booster/BoosterData";
import PayloadData from "../../../main/model/Payload/PayloadData";
import RocketData from "../../../main/model/Rocket/RocketData";
import WeatherAPI from "../../../main/API/rest/weatherAPI";

const {
	When,
	Then,
} = require('@cucumber/cucumber');

const pollAPI = new PollAPI();
const missionsCoordinatorAPI = new MissionsCoordinatorAPI();
const telemetryAPI = new TelemetryAPI();
const weatherAPI = new WeatherAPI();
const payloadAPI = new PayloadAPI();
const rocketAPISoap = new RocketAPISoap();
const realTimeAPI = new RealTimeAPI();
let poll : any;
let rocketStatus : RocketStatus;
let rocketSpeed =0;
let previousSpeed : number;
var rocketData: RocketData;
let boosterStatus: BoosterStatus;
let fuelLevel : number;
let missionID: string = "";
let weather: string|null = null;
let temps=0;

function timer() {
	let tmp = setInterval(() => (temps+=1), 1000);
}

function sleep(milliseconds : number) {
	const date = Date.now();
	let currentDate = null;
	do {
		currentDate = Date.now();
	} while (currentDate - date < milliseconds);
}


const verifyExistTelemetryData = async <T>(api: string, t : T) => {
	const telemetryData: T = await new Promise<T>((resolve, reject) => {
		// @ts-ignore
		telemetryAPI[api](missionID).then(res => {
			resolve(Object.assign(t, res.data))
		}).catch((err: any) => {
			reject(err)
		})
	})
	expect(telemetryData).not.toBeNull()
}

    
console.log("-------------------------------------------------------")
console.log("|                                                     |")
console.log("|                                                     |")
console.log("|                                                     |")
console.log("|                                                     |")
console.log("|                   SCENARIO    1                     |")
console.log("|                                                     |")
console.log("|                                                     |")
console.log("|                                                     |")
console.log("|                                                     |")
console.log("-------------------------------------------------------")

    

When("Richard creates a new mission", async function() {
	console.log("When Richard creates a new mission");
	missionID = await new Promise<string>((resolve, reject) => {
		missionsCoordinatorAPI.createMission().then(res => {
			resolve(res.data.missionId)
		}).catch(err => {
			reject(err)
		})
	});
})
Then("a new poll is created with its values set as {string}", async function(arg0: string) {
	console.log("Then a new poll is created with its values set as 'false'")
	expect(missionID).not.toBe("")
	const poll: Poll = await new Promise<Poll>((resolve, reject) => {
		 pollAPI.getPoll(missionID).then(res => {
			 resolve(Object.assign(new Poll(), res.data))
		 }).catch(err => {
			 reject(err)
		 }) 
	})
	expect(poll).not.toBeNull()
	expect(poll).not.toBe(undefined)
	expect(poll.getMissionStatus().toString()).toBe(arg0)
	expect(poll.getRocketStatus().toString()).toBe(arg0)
	expect(poll.getWeatherStatus().toString()).toBe(arg0)
})
Then('a new head stage is created', async function() {
	console.log("Then a new head stage is created");
	await verifyExistTelemetryData<RocketData>("getRocketData", new RocketData())
})
Then("a new booster is created", async function() {
	console.log("And a new booster is created");
	await verifyExistTelemetryData<BoosterData>("getBoosterData", new BoosterData())
})
Then("a new payload is created", async function() {
	console.log("And a new payload is created");
	await verifyExistTelemetryData<PayloadData>("getPayloadData", new PayloadData())
})
When("Tory has been informed that the poll has been created, she can check the weather status", async function() {
	weather = await new Promise((resolve, reject) => {
		weatherAPI.getWeather().then(res => {
			resolve(res.data);
		}).then(err => {
			reject(err);
		})
	})
})
Then("the weather status is {string}, {string} or {string}", function(arg0: string, arg1: string, arg2: string) {
	expect([arg0, arg1, arg2]).toContain(weather)
})


When("she answers positively to the poll", async function() {
	console.log("When she answers positively to the poll");
	await pollAPI.modifyPoll("weather", "true", missionID)
})
Then("the weather department vote is {string}",async function(arg0: string) {
	console.log("Then the weather department vote is 'true'");
	poll = (await pollAPI.getPoll(missionID)).data;
	expect(poll.weatherStatus.toString()).toBe(arg0);
})

When("Elon gets the poll",async function() {
	console.log("When Elon gets the poll");
	poll = (await pollAPI.getPoll(missionID)).data;
})
Then("he sees that Tory has answered to it so it is his turn to answer",async function() {
	console.log("Then he sees that Tory has answered to it so it is his turn to answer");
	expect(poll.weatherStatus).toBe(true);
})
When("he gets the rocket status",async function() {
	console.log("When he gets the rocket status");
	rocketData = await new Promise<RocketData>((resolve, reject) => {
		// @ts-ignore
		telemetryAPI.getRocketData(missionID).then(res => {
			resolve(Object.assign(new RocketData(), res.data))
		}).catch((err: any) => {
			reject(err)
		})
	})

})
Then("he sees the rocket is {string}", function(arg0: string) {
	console.log("Then he sees the rocket is 'On preparation'");
	expect(mapStatusToText[rocketData.rocketStatus]).toBe(arg0);   // mapper ?
})
When("Elon puts the rocket on internal power",async function() {
	console.log("When Elon puts the rocket on internal power");
	await rocketAPISoap.putRocketOnInternalPower(missionID);
})
Then("the status of the rocket is now {string} and everything is going fine for the rocket",{timeout: 60*1000},async function(arg0: string) {
	console.log("Then the status of the rocket is now 'On internal power' and everything is going fine for the rocket");
	await setIntervalConditionPromise(function(){
		realTimeAPI.getStatus(missionID).then(res => {
			rocketStatus = res.data.rocket
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=> mapStatusToText[rocketStatus]==arg0
	)
	expect(mapStatusToText[rocketStatus]).toBe(arg0);
})


When("he answers positively to the poll", function() {
	console.log("When he answers positively to the poll");
	pollAPI.modifyPoll("rocket","true",missionID);
})
Then("the rocket department answer to the poll is now {string}",async function(arg0: string) {
	console.log("Then the rocket department answer to the poll is now 'true'");
	poll = (await pollAPI.getPoll(missionID)).data;
	expect(poll.rocketStatus.toString()).toBe(arg0);
})

When("it's Richard's turn to answer, he votes on the poll",async function() {
	console.log("When it's Richard's turn to answer, he votes on the poll");
	await pollAPI.modifyPoll("mission", "true", missionID)
})
Then("the poll shows that the mission department vote is {string}",async function(arg0: string) {
	console.log("Then the poll shows that the mission department vote is 'true'");
	poll = (await pollAPI.getPoll(missionID)).data;
	expect(poll.missionStatus.toString()).toBe(arg0);
})


When("Elon initializes the launch process", function() {
	console.log("When Elon initializes the launch process");
	rocketAPISoap.initializeStartupProcess(missionID);
})
Then("Richard and Marie see in real time that the status of the rocket is now on {string}",{timeout: 60*1000},async function(arg0: string) {
	console.log("Then Richard and Marie see in real time that the status of the rocket is now on 'Startup'");
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				rocketStatus = res.data.rocket
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToText[rocketStatus].toString()==arg0 || Date.now()>(tmp+50000))
	)
	expect(mapStatusToText[rocketStatus]).toBe(arg0);
})
When("{int} seconds have passed after startup",{timeout : 60*1000},async function(arg0: number) {
	console.log("When 2 seconds have passed after startup");
	await setIntervalPromiseX(function(){
		realTimeAPI.getStatus(missionID).then(res => {
			rocketStatus = res.data.rocket
		}).catch(function(err)
		{
			return err.response;
		});
	},500, arg0)
})
Then("Richard and Marie see in real time that the rocket status is now {string} after startup",{timeout: 60*1000},async function(arg0: string) {
	console.log("Then Richard and Marie see in real time that the rocket status is now 'Main engine started' after startup");
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				rocketStatus = res.data.rocket
				if(mapStatusToText[rocketData.rocketStatus] == arg0) return;
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToText[rocketStatus].toString()==arg0 || Date.now()>(tmp+30000))
	)
	expect(mapStatusToText[rocketStatus]).toBe(arg0);
})
When("{int} seconds have passed after main engine", function(arg0: number) {
	console.log("When 3 seconds have passed after main engine");
	sleep(arg0*1000);
})
Then("Richard and Marie see in real time that the rocket is {string}",{timeout: 60*1000},async function(arg0: string) {
	console.log("Then Richard and Marie see in real time that the rocket is 'Launched'");
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				rocketStatus = res.data.rocket
				if(mapStatusToText[rocketData.rocketStatus] == arg0) return;
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToText[rocketStatus].toString()==arg0 || Date.now()>(tmp+50000))
	)

	expect(mapStatusToText[rocketStatus]).toBe(arg0);
})
When("the pressure of the rocket is at {int}",{timeout : 60*1000},async function(arg0: number) {
	console.log("When the pressure of the rocket is at 70");
	let rocketPressure = 0;
	await setIntervalConditionPromise(function(){
			telemetryAPI.getRocketData(missionID).then(function(res){
				rocketPressure = res.data.pressure;

			}).catch(function(err)
			{
				return err.response;
			});
		},500, () => (rocketPressure == arg0)
	);
})
Then("Richard and Marie see in real time that the rocket status is now {string} after main engine started",{timeout : 60*1000},async function(arg0: string) {
	console.log("Then Richard and Marie see in real time that the rocket status is now 'Reached max Q' after main engine started");
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				rocketStatus = res.data.rocket
				if(mapStatusToText[rocketData.rocketStatus] == arg0) return;
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToText[rocketStatus]==arg0 || Date.now()>(tmp+50000))
	)
	expect(mapStatusToText[rocketStatus]).toBe(arg0);
})
Then("the speed of the rocket does not increase anymore",async function() {
	console.log("And the speed of the rocket does not increase anymore");
	let sameSpeed = false;
	await setIntervalConditionPromise(async function(){
			previousSpeed = rocketSpeed;
			telemetryAPI.getRocketData(missionID).then((res) => {
				rocketSpeed = res.data.speed;
				if( previousSpeed == rocketSpeed) sameSpeed = true;
			})
		},500, () => (sameSpeed)
	);
	expect(previousSpeed).toBe(rocketSpeed);
})
When("the booster has {int}hl of fuel left",{timeout : 60*1000},async function(arg0: number) {
	console.log("When the booster has 15hl of fuel left");
	let boosterFuel = 0;
	await setIntervalConditionPromise(function(){
			telemetryAPI.getBoosterData(missionID).then(function(res){
				boosterFuel = res.data.fuelLevel;
			}).catch(function(err)
			{
				return err.response;
			});
		},500, () => (boosterFuel <= arg0)
	);

})


Then("Richard and Marie see in real time that the rocket status is {string}",{timeout : 60*1000},async function(arg0: string) {
	console.log("Then Richard and Marie see in real time that the rocket status is 'Main engine cut-off'");
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				rocketStatus = res.data.rocket

			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToText[rocketStatus].toString()==arg0 || Date.now()>(tmp+30000))
	)
	expect(mapStatusToText[rocketStatus]).toBe(arg0);
})
Then("then the rocket status is {string} after main engine",{timeout : 60*1000},async function(arg0: string) {
	console.log("And then the rocket status is 'Stage separation' after main engine");
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				rocketStatus = res.data.rocket
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToText[rocketStatus].toString()==arg0 || Date.now()>(tmp+50000))
	)
	expect(mapStatusToText[rocketStatus]).toBe(arg0);
})
Then("then the rocket status is {string} after stage separation",{timeout: 60*1000},async function(arg0: string) {
	console.log("And then the rocket status is 'Second engine started' after stage separation");
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				rocketStatus = res.data.rocket
				if(mapStatusToText[rocketData.rocketStatus] == arg0) return;
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToText[rocketStatus].toString()==arg0 || Date.now()>(tmp+50000))
	)
	expect(mapStatusToText[rocketStatus]).toBe(arg0);
})
Then("then the booster is going through a {string}",{timeout: 60*1000},async function(arg0: string) {
	console.log("And then the booster is going through a 'Flip maneuver'");
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				boosterStatus = res.data.booster
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToTextBooster[boosterStatus]==arg0 || Date.now()>(tmp+50000))
	)
	expect(mapStatusToTextBooster[boosterStatus]).toBe(arg0);
})

Then("then the booster status is {string} after flip maneuver",{timeout: 60*1000},async function(arg0: string) {
	console.log("And then the booster status is 'Entry burn' after flip maneuver");
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				boosterStatus = res.data.booster
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToTextBooster[boosterStatus]==arg0 || Date.now()>(tmp+50000))
	)
	expect(mapStatusToTextBooster[boosterStatus]).toBe(arg0);
})

Then("then the booster status is {string} after entry burn",{timeout: 60*1000},async function(arg0: string) {
	console.log("And then the booster status is 'Guidance' after entry burn");
	
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				boosterStatus = res.data.booster
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToTextBooster[boosterStatus].toString()==arg0 || Date.now()>(tmp+50000))
	)
	expect(mapStatusToTextBooster[boosterStatus]).toBe(arg0);
})
Then("then the booster status is {string} after guidance",{timeout: 60*1000},async function(arg0: string) {
	console.log("And then the booster status is 'Landing burn' after guidance");
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				boosterStatus = res.data.booster
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToTextBooster[boosterStatus].toString()==arg0 || Date.now()>(tmp+50000))
	)
	expect(mapStatusToTextBooster[boosterStatus]).toBe(arg0);
})
Then("then the booster status is {string} after landing burn",{timeout: 60*1000},async function(arg0: string) {
	console.log("And then the booster status is 'Landing legs deployed' after landing burn");
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				boosterStatus = res.data.booster
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToTextBooster[boosterStatus].toString()==arg0 || Date.now()>(tmp+50000))
	)
	expect(mapStatusToTextBooster[boosterStatus]).toBe(arg0);
})
Then("then the booster is landing, its status is {string}",{timeout: 60*1000},async function(arg0: string) {
	console.log("And then the booster is landing, its status is 'Landing'");
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				boosterStatus = res.data.booster
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToTextBooster[boosterStatus].toString()==arg0 || Date.now()>(tmp+50000))
	)
	expect(mapStatusToTextBooster[boosterStatus]).toBe(arg0);
})
Then("then the booster has landed, its status is {string}",{timeout: 60*1000},async function(arg0: string) {
	console.log("And then the booster has landed, its status is 'Landed'");
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				boosterStatus = res.data.booster
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToTextBooster[boosterStatus].toString()==arg0 || Date.now()>(tmp+50000))
	)
	expect(mapStatusToTextBooster[boosterStatus]).toBe(arg0);
})
Then("then the rocket status is {string}",{timeout: 60*1000},async function(arg0: string) {
	console.log("And then the rocket status is 'Fairing separation'");
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				rocketStatus = res.data.rocket
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToText[rocketStatus]==arg0 || Date.now()>(tmp+50000))
	)
	expect(mapStatusToText[rocketStatus]).toBe(arg0);
})
When("the rocket has no more fuel",{timeout: 60*1000},async function() {
	console.log("When the rocket has no more fuel")
	let rocketFuel = 0;
	await setIntervalConditionPromise(function(){
			telemetryAPI.getBoosterData(missionID).then(function(res){
				rocketFuel = res.data.fuelLevel;

			}).catch(function(err)
			{
				return err.response;
			});
		},500, () => (rocketFuel == 0) // 0 = EMPTY
	);
})
Then("the rocket status is {string}",{timeout: 60*1000},async function(arg0: string) {
	console.log("Then the rocket status is 'Second engine cut-off'");
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				rocketStatus = res.data.rocket
				if(mapStatusToText[rocketData.rocketStatus] == arg0) return;
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToText[rocketStatus].toString()==arg0)
	)
	expect(mapStatusToText[rocketStatus]).toBe(arg0);
})


When("Gwynn decides to deliver the payload",async function() {
	console.log("When Gwynn decides to deliver the payload");
	payloadAPI.deliverPayloadSOAPBack(missionID)
})

Then("the rocket status is now {string}",{timeout: 60*1000},async function(arg0: string) {
	console.log("Then the rocket status is now 'Payload delivered!'");
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				rocketStatus = res.data.rocket
				if(mapStatusToText[rocketData.rocketStatus] == arg0) return;
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToText[rocketStatus].toString()==arg0 || Date.now()>(tmp+50000))
	)
	expect(mapStatusToText[rocketStatus]).toBe(arg0);
})
