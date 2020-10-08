import React, {useEffect, useState} from 'react';

import TelemetryAPI from '../../src/main/API/telemetryAPI'
import {Button} from "@material-ui/core";
import BoosterData from "../../src/main/model/Booster/BoosterData";
import RocketData from "../../src/main/model/Rocket/RocketData";
import PayloadData from "../../src/main/model/Payload/PayloadData";
import { setState } from 'expect';
import BoosterTelemetry from './boosterTelemetry'
import RocketTelemetry from './rocketTelemetry'
import PayloadTelemetry from './payloadTelemetry'
const telemetryAPI = new TelemetryAPI();


const TelemetryMonitor = () => {

    const [boosterData, setBoosterData] = useState(new BoosterData());
    const [rocketData, setRocketData] = useState(new RocketData());
    const [payloadData, setPayloadData] = useState(new PayloadData());

    useEffect(() => {
        setInterval(() => {
            getPayloadData();
            getRockerData();
        }, 1000);
    }, []);


    const getRockerData = () => {
        telemetryAPI.getRocketData()
            .then(res => {
                console.log(res.data);
                setRocketData(res.data);
            })
            .catch(() => {
            });
    }

    const getPayloadData = () => {
        telemetryAPI.getPayloadData()
            .then(res => {
                console.log(res.data);
                setPayloadData(res.data);
            })
            .catch(() => {
            });
    }

    return (
        <>
            <br></br>
            <br></br>
            <h2>Telemetry monitoring</h2>
            <div className="row">
                <div className="col-sm">
                    <RocketTelemetry />
                </div>
                <div className="col-sm">
                    <BoosterTelemetry />
                </div>
                <div className="col-sm">
                    <PayloadTelemetry />
                </div>
            </div>
        </>
    )

};

export default TelemetryMonitor;