require('dotenv').config()
import MissionsCoordinatorAPI from "../../../main/API/rest/missionsCoordinatorAPI";
import PollAPI from "../../../main/API/rest/pollAPI";
import Poll from "../../../main/model/Poll";

const {
	When,
	Then,
	Given,
} = require('cucumber');

import expect from 'expect';
import TelemetryAPI from "../../../main/API/rest/telemetryAPI";
import { AxiosPromise } from "axios";
import BoosterData from "../../../main/model/Booster/BoosterData";
import PayloadData from "../../../main/model/Payload/PayloadData";
import RocketData from "../../../main/model/Rocket/RocketData";
import WeatherAPI from "../../../main/API/rest/weatherAPI";

const missionsCoordinatorAPI = new MissionsCoordinatorAPI();
const pollAPI = new PollAPI();
const telemetryAPI = new TelemetryAPI();
const weatherAPI = new WeatherAPI();

let missionID: string = "";
let weather: string|null = null;

const verifyExistTelemetryData = async <T>(api: <T>(id:string) => AxiosPromise) => {
	const telemetryData: T = await new Promise<T>((resolve, reject) => {
		api(missionID).then(res => {
			resolve(res.data)
		}).catch(err => {
			reject(err)
		})
	})
	expect(telemetryData).not.toBeNull()
}

When("Richard creates a new mission", async function() {
	missionID = await new Promise<string>((resolve, reject) => {
		missionsCoordinatorAPI.createMission().then(res => {
			resolve(res.data.id)
		}).catch(err => {
			reject(err)
		})
	});
})
Then("a new poll is created with its values set as {string}", async function(arg0: string) {
	expect(missionID).not.toBe("")
	const poll: Poll = await new Promise<Poll>((resolve, reject) => {
		 pollAPI.getPoll().then(res => {
			 resolve(res.data)
		 }).catch(err => {
			 reject(err)
		 }) 
	})
	expect(poll).not.toBeNull()
	expect(poll).not.toBe("")
	expect(poll.getMissionStatus()).toBe(arg0)
	expect(poll.getRocketStatus()).toBe(arg0)
	expect(poll.getWeatherStatus()).toBe(arg0)
})
Then("a new head stage is created #tester l'existance en faisant un get sur la télémétrie", async function() {
	await verifyExistTelemetryData<RocketData>(telemetryAPI.getRocketData)
})
Then("a new booster is created", async function() {
	await verifyExistTelemetryData<BoosterData>(telemetryAPI.getBoosterData)
})
Then("a new payload is creaded", async function() {
	await verifyExistTelemetryData<PayloadData>(telemetryAPI.getPayloadData)
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
	await pollAPI.modifyPoll("weather", "true", missionID)
})
Then("the weather department vote is {string}", function(arg0: string) {
	//do something
})
When("Elon gets the poll", function() {
	//do something
})
Then("he sees that Tory has answered to it so it is his turn to answer", function() {
	//do something
})
When("he gets the rocket status", function() {
	//do something
})
Then("he sees the rocket is {string}", function(arg0: string) {
	//do something
})
When("Elon puts the rocket on internal power", function() {
	//do something
})
Then("the status of the rocket is now {string} and everything is going fine for the rocket", function(arg0: string) {
	//do something
})
When("he answers positively to the poll", function() {
	//do something
})
Then("the rocket department answer to the poll is now {string}", function(arg0: string) {
	//do something
})
When("it's Richard's turn to answer, he votes on the poll", function() {
	//do something
})
Then("the poll shows that the mission department vote is {string}", function(arg0: string) {
	//do something
})
When("Elon initializes the launch process", function() {
	//do something
})
Then("Richard and Marie see in real time that the status of the rocket is now on {string}", function(arg0: string) {
	//do something
})
When("{int} seconds have passed after startup", function(arg0: number) {
	//do something
})
Then("Richard and Marie see in real time that the rocket status is now {string} after startup", function(arg0: string) {
	//do something
})
When("{int} seconds have passed after main engine", function(arg0: number) {
	//do something
})
Then("Richard and Marie see in real time that the rocket is {string}", function(arg0: string) {
	//do something
})
When("the pressure of the rocket is at {int}?", function(arg0: number) {
	//do something
})
Then("Richard and Marie see in real time that the rocket status is now {string} after main engine started", function(arg0: string) {
	//do something
})
Then("the speed of the rocket does not increase anymore", function() {
	//do something
})
When("the booster has {int}hl of fuel left", function(arg0: number) {
	//do something
})
Then("Richard and Marie see in real time that the rocket status is {string}", function(arg0: string) {
	//do something
})
Then("then the rocket status is {string} after main engine", function(arg0: string) {
	//do something
})
Then("then the rocket status is {string} after stage separation", function(arg0: string) {
	//do something
})
Then("that the booster is going through a {string}", function(arg0: string) {
	//do something
})
Then("then the booster status is {string} after flip maneuver", function(arg0: string) {
	//do something
})
Then("then the booster status is {string} after entry burn", function(arg0: string) {
	//do something
})
Then("then the booster status is Landing burn' after guidance", function() {
	//do something
})
Then("then the booster status is Landing legs deployed after landing burn", function() {
	//do something
})
Then("then the booster has landed, its status is {string}", function(arg0: string) {
	//do something
})
Then("then the rocket status is {string}", function(arg0: string) {
	//do something
})
When("the rocket has no more fuel", function() {
	//do something
})
Then("the rocket status is Second engine cut off", function() {
	//do something
})
When("Gwynn decides to deliver the payload then the rocket status is now {string}", function(arg0: string) {
	//do something
})
