import React, {useState, useEffect} from 'react';
import execute from "../../src/main/Services/Execute";
import Button from "@material-ui/core/Button";
import {mapRocketStatusKeys, RocketStatus} from "../../src/main/model/RocketStatus";
import TelemetryData from "../../src/main/model/TelemetryData";

interface IProps {
    validateRocket: () => void;
}

const RocketMonitor = (props: IProps) => {

    const [rocketStatus, setRocketStatus] = useState(RocketStatus.NOT_READY);
    const [telemetryData, setTelemetryData] = useState(new TelemetryData());

    useEffect(() => {
        execute.execute("telemetry", "get", undefined, undefined, "rocketstatus")
            ?.then(res => {
                setRocketStatus(parseInt(res.data, 10));
            })
            .catch(() => {
            });
    }, [rocketStatus, telemetryData]);

    const getRocketStatus = () => {
        execute.execute("telemetry", "get", undefined, undefined, "rocketstatus")
            ?.then(res => {
                const statusNumber = parseInt(res.data, 10);
                setRocketStatus(statusNumber);
                alert(mapRocketStatusKeys[statusNumber]);
            })
            .catch(() => {
            });
    };

    const launchRocket = () => {
        execute.execute("rocket", "launch")
            ?.then(res => {
                alert(res.data);
            })
            .catch(() => {
            });
    }

    const stageRocket = () => {
        execute.execute("rocket", "stage")
            ?.then(res => {
                alert(res.data);
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
            <h2>Rocket department</h2>
            <Button variant="contained" color="primary" onClick={getRocketStatus}>
                Get the rocket status
            </Button>
            <br/>

            <Button variant="contained" color="secondary" onClick={props.validateRocket}>
                Validate on mission poll
            </Button>
            <br/>

            <Button variant="contained" onClick={launchRocket}>
                Launch rocket
            </Button>
            <br/>

            <Button variant="contained" onClick={stageRocket}>
                Stage rocket
            </Button>
            <br/>

            <Button variant="contained" color="primary" onClick={getTelemetryData}>
                Get all telemetry data
            </Button>
            <p>{`Rocket status: ${telemetryData.getRocketStatus()}`}</p>
            <p>{`FuelLevel: ${telemetryData.getFuelLevel()}`}</p>
        </>
    )

};

export default RocketMonitor;