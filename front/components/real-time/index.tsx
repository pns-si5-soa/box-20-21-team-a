import React, {useState, useEffect} from 'react';
import realTimeAPI from '../../src/main/API/rest/realTimeAPI';

const telemetryAPI = new realTimeAPI();

interface ImissionStatus {
    rocket: string;
    booster: string;
  }

const rocketTelemetry = () => {

    const [missionStatus, setMissionStatus] = useState<ImissionStatus>( {
        rocket: 'Inconnu',
        booster: 'Inconnu'
      });



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
                <p className="card-text">{`Rocket status: ${missionStatus.rocket}`}</p>
                <p className="card-text">{`Booster status: ${missionStatus.booster}`}</p>
                
            </div>
        </div>
    )
}

export default rocketTelemetry;