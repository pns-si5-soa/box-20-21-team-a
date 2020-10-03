import React, {useState, useEffect} from 'react';
import execute from "../../src/main/Services/Execute";
import Button from "@material-ui/core/Button";
import {mapRocketStatusKeys, RocketStatus} from "../../src/main/model/Rocket";

const RocketMonitor = () => {

    const [rocketStatus, setRocketStatus] = useState(RocketStatus.NOT_READY) ;

    useEffect(() => {
        // execute.execute("rocket", "get")
        //     ?.then(res => {
        //         setRocketStatus(res.data);
        //     })
        //     .catch(()=>{});
    }, []);

    return (
        <>
            <h2>Rocket department</h2>
            {/*<Button variant="contained" color="primary" /!*onClick={this.getRocket}*!/>*/}
            {/*    Get the rocket status*/}
            {/*</Button>*/}
            <p>{mapRocketStatusKeys[rocketStatus]}</p>

            <br/>
            {/*<Button variant="contained" color="secondary" /!*onClick={this.validateRocket}*!/>*/}
            {/*    Validate on mission poll*/}
            {/*</Button>*/}
            <br/>
            {/*<Button variant="contained" /!*onClick={this.stageRocket}*!/>*/}
            {/*    Stage the rocket mid-flight*/}
            {/*</Button>*/}
            <h1>TEST</h1>
        </>
    )

};

export default RocketMonitor;