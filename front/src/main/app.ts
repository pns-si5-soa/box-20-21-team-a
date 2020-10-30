import RocketData from "./model/Rocket/RocketData";
import RocketAPI from './API/soap/node-calls/rocketAPI';
import weatherAPI from './API/rest/weatherAPI';
import MissionAPI from './API/rest/missionAPI';
import BoosterAPI from './API/soap/node-calls/boosterAPI';
import PayloadAPI from './API/soap/node-calls/payloadAPI';
import TelemetryAPI from './API/rest/telemetryAPI';
import {setIntervalConditionPromise} from './tools/set_intervalx';
import BoosterData from "./model/Booster/BoosterData";
import PayloadData from "./model/Payload/PayloadData";
import RocketStatus from "./model/Rocket/RocketStatus";
import {BoosterStatus} from "./model/Booster/BoosterStatus";
import MissionsCoordinatorAPI from "./API/rest/missionsCoordinatorAPI";

require("logs-module");
require('dotenv').config()

const weatherAPIInstance = new weatherAPI();
const rocketAPIInstance = new RocketAPI();
const missionAPIInstance = new MissionAPI();
const boosterAPIInstance = new BoosterAPI();
const payloadAPIInstance = new PayloadAPI();
const telemetryAPIInstance = new TelemetryAPI();
const missionsCoordinatorAPIInstance = new MissionsCoordinatorAPI();
let rocketData = new RocketData();
let boosterData = new BoosterData();
let payloadData = new PayloadData();


main();

async function main() {

    let stop = false;
    let missionsId : string[];


    console.log("Richard creates the poll to start the mission");
    missionsId = await missionAPIInstance.createPoll().then((res) => {
        return missionsCoordinatorAPIInstance.getMissions().then((res) =>{
            return res.data;
        });
    }).catch(err => {
        console.error('There is an error : ', err);
    })


    console.log("Once the poll is created, Tory checks the weather");
    await weatherAPIInstance.getWeather().catch(err => {
        console.error('There is an error : ', err);
    })


    console.log("If the weather is good, Tory answers \"Go\" to the poll");
    await missionAPIInstance.modifyPoll("weather", "true",missionsId[0]).catch(err => {
        console.error('There is an error : ', err);
    })


    console.log("Elon checks the rocket status");
    await telemetryAPIInstance.getRocketData(missionsId[0]).catch(err => {
        console.error('There is an error : ', err);
    })

    console.log("Once the weather response is \"Go\" and the rocket status is Ready, Elon answers \"Go\" to the poll");
    await missionAPIInstance.modifyPoll("rocket", "true",missionsId[0]).catch(err => {
        console.error('There is an error : ', err);
    })


    console.log("Once the weather and rocket responses are \"Go\",Richard answers \"Go\" to the poll");
    await missionAPIInstance.modifyPoll("mission", "true",missionsId[0]).catch(err => {
        console.error('There is an error : ', err);
    })


    setIntervalConditionPromise(() => {
            telemetryAPIInstance.getRocketData(missionsId[0]).then(res => {
                rocketData = res.data;
            }).catch(err => {
                console.error('There is an error : ', err);
            });
            telemetryAPIInstance.getBoosterData(missionsId[0]).then(res => {
                boosterData = res.data;
            }).catch(err => {
                console.error('There is an error : ', err);
            });
            telemetryAPIInstance.getPayloadData(missionsId[0]).then(res => {
                payloadData = res.data;
            }).catch(err => {
                console.error('There is an error : ', err);
            });
        },
        3000,
        () => stop/*false*/);

    setTimeout(() => {
        console.log("Once the poll is good, Elon launches the rocket");
        rocketAPIInstance.initializeStartupProcess(missionsId[0]);
    }, 100);


    let passOnce = false;
    setIntervalConditionPromise(() => {
            if (rocketData.rocketStatus == RocketStatus.FAIRING_SEPARATION) {
                console.log("Gwynne delivers the payload");
                payloadAPIInstance.deliverPayloadSOAPBack(missionsId[0]);
                passOnce = true;
            }
        },
        1000,
        () => passOnce);


    let passOnce2 = false;
    setIntervalConditionPromise(() => {
            if (payloadData.payloadStatus == 2 && boosterData.boosterStatus == BoosterStatus.LANDED) {
                console.log("If something went wrong, the rocket and the booster can be destroyed separately");
                console.log("Richard wants to destroy the rocket");
                rocketAPIInstance.destroyRocketSOAPBack(missionsId[0]);
                passOnce2 = true;
            }
        },
        1000,
        () => passOnce2);

    let passOnce3 = false;
    setIntervalConditionPromise(() => {
            if (rocketData.rocketStatus == RocketStatus.DESTROYED) {
                console.log("Richard wants to destroy the booster too");
                boosterAPIInstance.destroyBoosterSOAPBack(missionsId[0]);
                passOnce3 = true;
                stop = true;
            }
        },
        1000,
        () => passOnce3);
}
