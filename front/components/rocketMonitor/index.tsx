import React, {useState, useEffect} from 'react';
import Button from "@material-ui/core/Button";

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
        </>
    )

};

export default RocketMonitor;