import {BoosterStatus, mapStatusToText as mapStatusToTextBooster} from "../../../main/model/Booster/BoosterStatus";
import RocketStatus, {mapStatusToText} from "../../../main/model/Rocket/RocketStatus";
import RocketAPISoap from "../../../main/API/soap/node-calls/rocketAPI";
import RealTimeAPI from "../../../main/API/rest/realTimeAPI";
import {setIntervalConditionPromise, setIntervalPromiseX} from "../../../main/tools/set_intervalx";
import PayloadAPI from "../../../main/API/soap/node-calls/payloadAPI";

require('dotenv').config()
import "logs-module"
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

require('dotenv').config()

const {
	When,
	Then,
} = require('cucumber');

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

When("Richard creates a new mission", async function() {
	missionID = await new Promise<string>((resolve, reject) => {
		missionsCoordinatorAPI.createMission().then(res => {
			resolve(res.data.missionId)
		}).catch(err => {
			reject(err)
		})
	});
})
Then("a new poll is created with its values set as {string}", async function(arg0: string) {
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
	await verifyExistTelemetryData<RocketData>("getRocketData", new RocketData())
})
Then("a new booster is created", async function() {
	await verifyExistTelemetryData<BoosterData>("getBoosterData", new BoosterData())
})
Then("a new payload is created", async function() {
	await verifyExistTelemetryData<PayloadData>("getPayloadData", new PayloadData())
})
/*When("Tory has been informed that the poll has been created, she can check the weather status", async function() {
	weather = await new Promise((resolve, reject) => {
		weatherAPI.getWeather().then(res => {
			resolve(res.data);
		}).then(err => {
			reject(err);
		})
	})
})*/
/*Then("the weather status is {string}, {string} or {string}", function(arg0: string, arg1: string, arg2: string) {
	expect([arg0, arg1, arg2]).toContain(weather)
})*/
When("she answers positively to the poll", async function() {
	await pollAPI.modifyPoll("weather", "true", missionID)
})
Then("the weather department vote is {string}",async function(arg0: string) {
	poll = (await pollAPI.getPoll(missionID)).data;
	expect(poll.weatherStatus.toString()).toBe(arg0);
})
When("Elon gets the poll",async function() {
	poll = (await pollAPI.getPoll(missionID)).data;
})
Then("he sees that Tory has answered to it so it is his turn to answer",async function() {
	expect(poll.weatherStatus).toBe(true);
})
When("he gets the rocket status",async function() {
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
	expect(mapStatusToText[rocketData.rocketStatus]).toBe(arg0);   // mapper ?
})
When("Elon puts the rocket on internal power",async function() {
	await rocketAPISoap.putRocketOnInternalPower(missionID);
})
Then("the status of the rocket is now {string} and everything is going fine for the rocket",{timeout: 30*1000},async function(arg0: string) {
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
		realTimeAPI.getStatus(missionID).then(res => {
			rocketStatus = res.data.rocket
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToText[rocketStatus]==arg0 || Date.now()>(tmp+20000))
	)
	expect(mapStatusToText[rocketStatus]).toBe(arg0);
})
When("he answers positively to the poll", function() {
	pollAPI.modifyPoll("rocket","true",missionID);
})
Then("the rocket department answer to the poll is now {string}",async function(arg0: string) {
	poll = (await pollAPI.getPoll(missionID)).data;
	expect(poll.rocketStatus.toString()).toBe(arg0);
})
When("it's Richard's turn to answer, he votes on the poll",async function() {
	await pollAPI.modifyPoll("mission", "true", missionID)
})
Then("the poll shows that the mission department vote is {string}",async function(arg0: string) {
	poll = (await pollAPI.getPoll(missionID)).data;
	expect(poll.missionStatus.toString()).toBe(arg0);
})
When("Elon initializes the launch process", function() {
	rocketAPISoap.initializeStartupProcess(missionID);
})
Then("Richard and Marie see in real time that the status of the rocket is now on {string}",{timeout: 30*1000},async function(arg0: string) {
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				rocketStatus = res.data.rocket
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToText[rocketStatus].toString()==arg0 || Date.now()>(tmp+20000))
	)
	expect(mapStatusToText[rocketStatus]).toBe(arg0);
})
When("{int} seconds have passed after startup",{timeout : 30*1000},async function(arg0: number) {
	await setIntervalPromiseX(function(){
		realTimeAPI.getStatus(missionID).then(res => {
			rocketStatus = res.data.rocket
		}).catch(function(err)
		{
			return err.response;
		});
	},500, arg0)
})
Then("Richard and Marie see in real time that the rocket status is now {string} after startup",{timeout: 40*1000},async function(arg0: string) {
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
	sleep(arg0*1000);
})
Then("Richard and Marie see in real time that the rocket is {string}",{timeout: 30*1000},async function(arg0: string) {
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				rocketStatus = res.data.rocket
				if(mapStatusToText[rocketData.rocketStatus] == arg0) return;
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToText[rocketStatus].toString()==arg0 || Date.now()>(tmp+20000))
	)

	expect(mapStatusToText[rocketStatus]).toBe(arg0);
})
When("the pressure of the rocket is at {int}",{timeout : 30*1000},async function(arg0: number) {
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
Then("Richard and Marie see in real time that the rocket status is now {string} after main engine started",{timeout : 50*1000},async function(arg0: string) {
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				rocketStatus = res.data.rocket
				if(mapStatusToText[rocketData.rocketStatus] == arg0) return;
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToText[rocketStatus]==arg0 || Date.now()>(tmp+40000))
	)
	expect(mapStatusToText[rocketStatus]).toBe(arg0);
})
Then("the speed of the rocket does not increase anymore",async function() {
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
When("the booster has {int}hl of fuel left",{timeout : 30*1000},async function(arg0: number) {
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
Then("Richard and Marie see in real time that the rocket status is {string}",{timeout : 40*1000},async function(arg0: string) {
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
Then("then the rocket status is {string} after main engine",{timeout : 50*1000},async function(arg0: string) {
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				rocketStatus = res.data.rocket
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToText[rocketStatus].toString()==arg0 || Date.now()>(tmp+40000))
	)
	expect(mapStatusToText[rocketStatus]).toBe(arg0);
})
Then("then the rocket status is {string} after stage separation",{timeout: 30*1000},async function(arg0: string) {
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				rocketStatus = res.data.rocket
				if(mapStatusToText[rocketData.rocketStatus] == arg0) return;
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToText[rocketStatus].toString()==arg0 || Date.now()>(tmp+20000))
	)
	expect(mapStatusToText[rocketStatus]).toBe(arg0);
})
Then("then the booster is going through a {string}",{timeout: 30*1000},async function(arg0: string) {
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				boosterStatus = res.data.booster
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToTextBooster[boosterStatus]==arg0 || Date.now()>(tmp+20000))
	)
	expect(mapStatusToTextBooster[boosterStatus]).toBe(arg0);
})

Then("then the booster status is {string} after flip maneuver",{timeout: 30*1000},async function(arg0: string) {
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				boosterStatus = res.data.booster
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToTextBooster[boosterStatus]==arg0 || Date.now()>(tmp+20000))
	)
	expect(mapStatusToTextBooster[boosterStatus]).toBe(arg0);
})

Then("then the booster status is {string} after entry burn",{timeout: 30*1000},async function(arg0: string) {
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				boosterStatus = res.data.booster
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToTextBooster[boosterStatus].toString()==arg0 || Date.now()>(tmp+20000))
	)
	expect(mapStatusToTextBooster[boosterStatus]).toBe(arg0);
})
Then("then the booster status is {string} after guidance",{timeout: 30*1000},async function(arg0: string) {
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				boosterStatus = res.data.booster
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToTextBooster[boosterStatus].toString()==arg0 || Date.now()>(tmp+20000))
	)
	expect(mapStatusToTextBooster[boosterStatus]).toBe(arg0);
})
Then("then the booster status is {string} after landing burn",{timeout: 30*1000},async function(arg0: string) {
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				boosterStatus = res.data.booster
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToTextBooster[boosterStatus].toString()==arg0 || Date.now()>(tmp+20000))
	)
	expect(mapStatusToTextBooster[boosterStatus]).toBe(arg0);
})
Then("then the booster has landed, its status is {string}",{timeout: 30*1000},async function(arg0: string) {
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				boosterStatus = res.data.booster
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToTextBooster[boosterStatus].toString()==arg0 || Date.now()>(tmp+20000))
	)
	expect(mapStatusToTextBooster[boosterStatus]).toBe(arg0);
})
Then("then the rocket status is {string}",{timeout: 30*1000},async function(arg0: string) {
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				rocketStatus = res.data.rocket
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToText[rocketStatus]==arg0 || Date.now()>(tmp+20000))
	)
	expect(mapStatusToText[rocketStatus]).toBe(arg0);
})
When("the rocket has no more fuel",{timeout: 30*1000},async function() {
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
Then("the rocket status is {string}",{timeout: 30*1000},async function(arg0: string) {
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				rocketStatus = res.data.rocket
				if(mapStatusToText[rocketData.rocketStatus] == arg0) return;
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToText[rocketStatus].toString()==arg0 || Date.now()>(tmp+20000))
	)
	expect(mapStatusToText[rocketStatus]).toBe(arg0);
})
When("Gwynn decides to deliver the payload",async function() {
	payloadAPI.deliverPayloadSOAPBack(missionID)
})

Then("the rocket status is now {string}",{timeout: 30*1000},async function(arg0: string) {
	let tmp = Date.now();
	await setIntervalConditionPromise(function(){
			realTimeAPI.getStatus(missionID).then(res => {
				rocketStatus = res.data.rocket
				if(mapStatusToText[rocketData.rocketStatus] == arg0) return;
			}).catch(function(err)
			{
				return err.response;
			});
		},500, ()=>(mapStatusToText[rocketStatus].toString()==arg0 || Date.now()>(tmp+20000))
	)
	expect(mapStatusToText[rocketStatus]).toBe(arg0);
})
