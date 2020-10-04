import React, {useState, useEffect} from 'react';
import execute from "../../src/main/Services/Execute";
import Button from "@material-ui/core/Button";
import {mapRocketStatusKeys, RocketStatus} from "../../src/main/model/Rocket";

interface IProps {
    validateRocket: () => void;
}

const RocketMonitor = (props: IProps) => {

    const [rocketStatus, setRocketStatus] = useState(RocketStatus.NOT_READY);

    useEffect(() => {
        execute.execute("rocket", "get")
            ?.then(res => {
                setRocketStatus(parseInt(res.data, 10));
            })
            .catch(() => {
            });
    }, [rocketStatus]);

    const getRocketStatus = () => {
        execute.execute("rocket", "get")
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
        </>
    )

};

export default RocketMonitor;