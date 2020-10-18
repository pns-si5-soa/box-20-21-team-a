import React, {useState, useEffect} from 'react';
import realTimeAPI from '../../src/main/API/rest/realTimeAPI';

const telemetryAPI = new realTimeAPI();

const rocketTelemetry = () => {

    const [missionStatus, setMissionStatus] = useState("none");

    useEffect(() => {
        setInterval(() => {
            getMissionStatus();
        }, 3000);
    }, []);

    const getMissionStatus = () => {
        telemetryAPI.getStatus()
            .then(res => {
                console.log(res.data);
                setMissionStatus(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Mission</h5>
                <p className="card-text">{`Status: ${missionStatus}`}</p>
            </div>
        </div>
    )
}

export default rocketTelemetry;