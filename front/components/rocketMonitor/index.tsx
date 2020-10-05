import React, {useState, useEffect} from 'react';
import execute from "../../src/main/Services/Execute";
import Button from "@material-ui/core/Button";
import {mapRocketStatusKeys, RocketStatus} from "../../src/main/model/RocketStatus";
import TelemetryData from "../../src/main/model/TelemetryData";

interface IProps {
    validateRocket: () => void;
}

const RocketMonitor = (props: IProps) => {

    const [telemetryData, setTelemetryData] = useState({rocketStatus: 0, fuelLevel: -1});

    useEffect(() => {
        execute.execute("telemetry", "get", undefined, undefined, "all")
            ?.then(res => {
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
        execute.execute("rocket", "launch")
            ?.then(res => {
                alert(res);
                console.log(res);
                getTelemetryData();
            })
            .catch(() => {
            });
    }

    const stageRocket = () => {
        execute.execute("rocket", "stage")
            ?.then(res => {
                alert(res);
                getTelemetryData();
            })
            .catch(() => {
            });
    };
    const deliverPayload = () => {
        execute.execute("rocket", "payload")
            ?.then(res => {
                alert(res);
                getTelemetryData();
            })
            .catch(() => {
            });
    };

    const getTelemetryData = () => {
        execute.execute("telemetry", "get", undefined, undefined, "all")
            ?.then(res => {
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