import React, {useState, useEffect} from 'react';
import execute from "../../src/main/Services/Execute";
import Button from "@material-ui/core/Button";
import {mapRocketStatusKeys, RocketStatus} from "../../src/main/model/Rocket";
import Poll from "../../src/main/model/Poll";

const RocketMonitor = () => {

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
                setRocketStatus(parseInt(res.data, 10));
                console.log(mapRocketStatusKeys[res.data]);
            })
            .catch(() => {
            });
    };

    const validateRocket = () => {
        execute.execute("mission", "put", "rocket", "true")
            ?.then(res => {
                poll: Object.assign(new Poll(), res.data);
                console.log(`Voted ${res.data} for rocket`)
            })
            .catch(() => {
            });
    };

    const launchRocket = () => {
        execute.execute("rocket", "launch")
            ?.then(res => {
                console.log(res.data);
            })
            .catch(() => {
            });
    }

    const stageRocket = () => {
        execute.execute("rocket", "stage")
            ?.then(res => {
                console.log(res.data);
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
            {/*<p>{mapRocketStatusKeys[rocketStatus]}</p>*/}

            <br/>
            <Button variant="contained" color="secondary" onClick={validateRocket}>
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