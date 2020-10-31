import React from 'react';
import Button from "@material-ui/core/Button";

import RocketAPI from '../../src/main/API/soap/jquery-calls/rocketAPI'
import PayloadAPI from '../../src/main/API/soap/jquery-calls/payloadAPI'


const rocketAPI = new RocketAPI();
const payloadAPI = new PayloadAPI();


interface IProps {
    id: string
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
        rocketAPI.destroyRocket(props.id)
            .then(res => {

            })
            .catch(() => {
            });
    };

    const putRocketOnInternalPower = () => {
        rocketAPI.putRocketOnInternalPower(props.id)
            .then(res => {
            })
            .catch(() => {
            });
    };

    const initializeStartupProcess = () => {
        rocketAPI.initializeStartupProcess(props.id)
            .then(res => {

            })
            .catch(() => {
            });
    };
    const deliverPayload = () => {
        payloadAPI.deliverPayloadSOAP(props.id)
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