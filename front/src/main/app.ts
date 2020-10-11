
require('dotenv').config()
import RocketAPI from './API/rocketAPI'
import weatherAPI from './API/weatherAPI'
import MissionAPI from './API/missionAPI'
import BoosterAPI from './API/boosterAPI'
import PayloadAPI from './API/payloadAPI'
import TelemetryAPI from './API/telemetryAPI'
import {setIntervalConditionPromise} from "../../../back/booster-service/src/app/tools/set_intervalx";

const weatherAPIInstance = new weatherAPI()
const rocketAPIInstance = new RocketAPI()
const missionAPIInstance = new MissionAPI()
const boosterAPIInstance = new BoosterAPI()
const payloadAPIInstance = new PayloadAPI()
const telemetryAPIInstance = new TelemetryAPI()

console.log("Richard creates the poll to start the mission");
missionAPIInstance.createPoll().then(res => {

}).catch(err => {
    console.log('There is an error : ', err);
})

console.log("Once the poll is created, Tory checks the weather");
weatherAPIInstance.getWeather().then(res => {
}).catch(err => {
    console.log('There is an error : ', err);
})

console.log("If the weather is good, Tory answers \"Go\" to the poll");
missionAPIInstance.modifyPoll("weather","true").then(res => {
}).catch(err => {
    console.log('There is an error : ', err);
})

console.log("Elon checks the rocket status");
telemetryAPIInstance.getRocketData().then(res => {
}).catch(err => {
    console.log('There is an error : ', err);
})

console.log("Once the weather response is \"Go\" and the rocket status is Ready, Elon answers \"Go\" to the poll");
missionAPIInstance.modifyPoll("rocket","true").then(res => {
}).catch(err => {
    console.log('There is an error : ', err);
})

console.log("Once the weather and rocket responses are \"Go\",Richard answers \"Go\" to the poll");
missionAPIInstance.modifyPoll("mission","true").then(res => {
}).catch(err => {
    console.log('There is an error : ', err);
})


setIntervalConditionPromise(() => {
        telemetryAPIInstance.getRocketData();
        telemetryAPIInstance.getBoosterData();
        telemetryAPIInstance.getPayloadData();
    },
    3000,
    () => false);

console.log("Once the poll is good, Elon launches the rocket");
boosterAPIInstance.launchBoosterSOAP().then(res => {
}).catch(err => {
    console.log('There is an error : ', err);
})

console.log("Lesbian delivers the payload");
payloadAPIInstance.deliverPayloadSOAP().then(res => {
}).catch(err => {
    console.log('There is an error : ', err);
})