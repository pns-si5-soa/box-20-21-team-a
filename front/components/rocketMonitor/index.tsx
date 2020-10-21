import React from 'react';
import Button from "@material-ui/core/Button";

import RocketAPI from '../../src/main/API/soap/jquery-calls/rocketAPI'
import TelemetryAPI from '../../src/main/API/rest/telemetryAPI'
import PayloadAPI from '../../src/main/API/soap/jquery-calls/payloadAPI'


const rocketAPI = new RocketAPI();
const payloadAPI = new PayloadAPI();


interface IProps {
    validateRocket: () => void;
}

const RocketMonitor = (props: IProps) => {

    // const [telemetryData, setTelemetryData] = useState({rocketStatus: 0, fuelLevel: -1});

    /*const getRocketStatus = () => {
        execute.execute("telemetry", "get", undefined, undefined, "all")
            ?.then(res => {
                setTelemetryData(res.data);
                alert(mapRocketStatusKeys[res.data.rocketStatus]);
            })
            .catch(() => {
            });
    };*/

    const destroyRocket = () => {
        rocketAPI.destroyRocket()
            .then(res => {
            
            })
            .catch(() => {
            });
    };

    const putRocketOnInternalPower = () => {
        rocketAPI.putRocketOnInternalPower()
            .then(res => {
            })
            .catch(() => {
            });
    };

    const initializeStartupProcess = () => {
        rocketAPI.initializeStartupProcess()
            .then(res => {
                
            })
            .catch(() => {
            });
    };
    const deliverPayload = () => {
        payloadAPI.deliverPayloadSOAP()
            .then(res => {
            })
            .catch(() => {
            });
    };

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

            <Button variant="contained" color="primary" onClick={destroyRocket}>
                Destroy rocket
            </Button>

            <Button variant="contained" color="primary" onClick={putRocketOnInternalPower}>
                Put Rocket On Internal Power
            </Button>

            <Button variant="contained" color="primary" onClick={initializeStartupProcess}>
                Initialize Countdown
            </Button>

            {/*todo put this in a separate component: */}
            <Button variant="contained" color="primary" onClick={deliverPayload}>
                Deliver payload
            </Button>
            <br/>
        </>
    );

};

export default RocketMonitor;