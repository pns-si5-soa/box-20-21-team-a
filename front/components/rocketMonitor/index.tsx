import React, {useState, useEffect} from 'react';
import Button from "@material-ui/core/Button";
import {mapRocketStatusKeys, RocketStatus} from "../../src/main/model/RocketStatus";
import TelemetryData from "../../src/main/model/TelemetryData";

import RocketAPI from '../../src/main/API/rocketAPI'
import TelemetryAPI from '../../src/main/API/telemetryAPI'
import PayloadAPI from '../../src/main/API/payloadAPI'


const rocketAPI = new RocketAPI();
const telemetryAPI = new TelemetryAPI();
const payloadAPI = new PayloadAPI();


interface IProps {
    validateRocket: () => void;
}

const RocketMonitor = (props: IProps) => {

    const [telemetryData, setTelemetryData] = useState({rocketStatus: 0, fuelLevel: -1});

    useEffect(() => {
        telemetryAPI.getData()
            .then(res => {
                setTelemetryData(res.data);
            })
            .catch(() => {
            });
    }, []);

    /*const getRocketStatus = () => {
        execute.execute("telemetry", "get", undefined, undefined, "all")
            ?.then(res => {
                setTelemetryData(res.data);
                alert(mapRocketStatusKeys[res.data.rocketStatus]);
            })
            .catch(() => {
            });
    };*/

    const launchRocket = () => {
        rocketAPI.launchRocketSOAP()
            .then(res => {
                alert(res);
                console.log(res);
                getTelemetryData();
            })
            .catch(() => {
            });
    }

    const stageRocket = () => {
        rocketAPI.stageRocketMidFlightSOAP()
            .then(res => {
                alert(res);
                getTelemetryData();
            })
            .catch(() => {
            });
    };
    const deliverPayload = () => {
        payloadAPI.deliverPayloadSOAP()
            .then(res => {
                alert(res);
                getTelemetryData();
            })
            .catch(() => {
            });
    };

    const getTelemetryData = () => {
        telemetryAPI.getData()
            .then(res => {
                setTelemetryData(res.data);
            })
            .catch(() => {
            });
    }

    return (
        <>
            <h2>Rocket monitoring</h2>
            {/*<Button variant="contained" color="primary" onClick={getRocketStatus}>
                Get the rocket status
            </Button>
            <br/>*/}

            <Button variant="contained" color="secondary" onClick={props.validateRocket}>
                Validate on mission poll
            </Button>
            <br/>

            <Button variant="contained" color="primary" onClick={launchRocket}>
                Launch rocket
            </Button>
            <br/>

            <Button variant="contained" onClick={stageRocket}>
                Stage rocket
            </Button>
            <br/>

            <Button variant="contained" onClick={deliverPayload}>
                Deliver the payload
            </Button>
            <br/>

            <div>
                {`Fuel level: ${telemetryData.fuelLevel}`}
            </div>
            <div>
                {`Rocket Status: ${mapRocketStatusKeys[telemetryData.rocketStatus]}`}
            </div>
        </>
    )

};

export default RocketMonitor;