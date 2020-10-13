import RocketData from "./model/Rocket/RocketData";

require("logs-module");
require('dotenv').config()
import RocketAPI from './API/soap/node-calls/rocketAPI';
import weatherAPI from './API/rest/weatherAPI';
import MissionAPI from './API/rest/missionAPI';
import BoosterAPI from './API/soap/node-calls/boosterAPI';
import PayloadAPI from './API/soap/node-calls/payloadAPI';
import TelemetryAPI from './API/rest/telemetryAPI';
import {setIntervalConditionPromise} from './tools/set_intervalx';
import BoosterData from "./model/Booster/BoosterData";
import PayloadData from "./model/Payload/PayloadData";

const weatherAPIInstance = new weatherAPI();
const rocketAPIInstance = new RocketAPI();
const missionAPIInstance = new MissionAPI();
const boosterAPIInstance = new BoosterAPI();
const payloadAPIInstance = new PayloadAPI();
const telemetryAPIInstance = new TelemetryAPI();
let rocketData = new RocketData();
let boosterData = new BoosterData();
let payloadData = new PayloadData();


main();

async function main() {

    let stop = false;


    console.log("Richard creates the poll to start the mission");
    await missionAPIInstance.createPoll().catch(err => {
        console.error('There is an error : ', err);
    })


    console.log("Once the poll is created, Tory checks the weather");
    await weatherAPIInstance.getWeather().catch(err => {
        console.error('There is an error : ', err);
    })


    console.log("If the weather is good, Tory answers \"Go\" to the poll");
    await missionAPIInstance.modifyPoll("weather", "true").catch(err => {
        console.error('There is an error : ', err);
    })


    console.log("Elon checks the rocket status");
    await telemetryAPIInstance.getRocketData().catch(err => {
        console.error('There is an error : ', err);
    })

    console.log("Once the weather response is \"Go\" and the rocket status is Ready, Elon answers \"Go\" to the poll");
    await missionAPIInstance.modifyPoll("rocket", "true").catch(err => {
        console.error('There is an error : ', err);
    })


    console.log("Once the weather and rocket responses are \"Go\",Richard answers \"Go\" to the poll");
    await missionAPIInstance.modifyPoll("mission", "true").catch(err => {
        console.error('There is an error : ', err);
    })


    setIntervalConditionPromise(() => {
            telemetryAPIInstance.getRocketData().then(res => {
                rocketData = res.data;
            }).catch(err => {
                console.error('There is an error : ', err);
            });
            telemetryAPIInstance.getBoosterData().then(res => {
                boosterData = res.data;
            }).catch(err => {
                console.error('There is an error : ', err);
            });
            telemetryAPIInstance.getPayloadData().then(res => {
                payloadData = res.data;
            }).catch(err => {
                console.error('There is an error : ', err);
            });
        },
        3000,
        () => stop/*false*/);

    setTimeout(() => {
        console.log("Once the poll is good, Elon launches the rocket");
        boosterAPIInstance.launchBoosterSOAPBack();
    }, 100);


    let passOnce = false;
    setIntervalConditionPromise(() => {
            if (rocketData.rocketStatus == 4) {
                console.log("Gwynne delivers the payload");
                payloadAPIInstance.deliverPayloadSOAPBack();
                passOnce = true;
            }
        },
        1000,
        () => passOnce);


    let passOnce2 = false;
    setIntervalConditionPromise(() => {
            if (payloadData.payloadStatus == 2 && boosterData.boosterStatus == 3) {
                console.log("If something went wrong, the rocket and the booster can be destroyed separately");
                console.log("Richard wants to destroy the rocket");
                rocketAPIInstance.destroyRocketSOAPBack();
                passOnce2 = true;
            }
        },
        1000,
        () => passOnce2);

    let passOnce3 = false;
    setIntervalConditionPromise(() => {
            if (rocketData.rocketStatus == 5) {
                console.log("Richard wants to destroy the booster too");
                boosterAPIInstance.destroyBoosterSOAPBack();
                passOnce3 = true;
                stop = true;
            }
        },
        1000,
        () => passOnce3);
}
