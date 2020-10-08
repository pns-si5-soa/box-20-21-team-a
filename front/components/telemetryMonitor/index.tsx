import React, {useEffect, useState} from 'react';

import TelemetryAPI from '../../src/main/API/telemetryAPI'
import {Button} from "@material-ui/core";
import BoosterData from "../../src/main/model/Booster/BoosterData";
import RocketData from "../../src/main/model/Rocket/RocketData";
import PayloadData from "../../src/main/model/Payload/PayloadData";
import { setState } from 'expect';
const telemetryAPI = new TelemetryAPI();


const TelemetryMonitor = () => {

    const [boosterData, setBoosterData] = useState(new BoosterData());
    const [rocketData, setRocketData] = useState(new RocketData());
    const [payloadData, setPayloadData] = useState(new PayloadData());

    useEffect(() => {
        setInterval(() => {
            getBoosterData();
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

    const getBoosterData = () => {
        telemetryAPI.getBoosterData()
            .then(res => {
                console.log(res.data);
                setBoosterData(res.data);
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
                    Rocket Data:
                    <div>
                        {`Altitude: ${rocketData.altitude}`}
                        {`Fuel Level: ${rocketData.fuelLevel}`}
                        {`Speed: ${rocketData.speed}`}
                        {`Pressure: ${rocketData.pressure}`}
                    </div>
                </div>
                <div className="col-sm">
                    Booster Data:
                    <div>
                        {`Altitude: ${boosterData.altitude}`}km<br/>
                        {`Fuel Level: ${boosterData.fuelLevel}`}L<br/>
                        {`Speed: ${boosterData.speed}`}km.s-1<br/>
                        {`Booster Status: ${boosterData.boosterStatus}`}<br/>
                    </div>
                </div>
                <div className="col-sm">
                    Payload Data:
                    <div>
                        {`Payload Status: ${payloadData.payloadStatus}`}
                    </div>
                </div>
            </div>
        </>
    )

};

export default TelemetryMonitor;