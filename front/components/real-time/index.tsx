import React, {useEffect, useState} from 'react';
import realTimeAPI from '../../src/main/API/rest/realTimeAPI';
import {BoosterStatus, mapStatusToText as mapStatusToTextBooster} from '../../src/main/model/Booster/BoosterStatus'
import RocketStatus, {mapStatusToText as mapStatusToTextRocket} from '../../src/main/model/Rocket/RocketStatus'


const telemetryAPI = new realTimeAPI();

interface ImissionStatus {
    rocket: RocketStatus;
    booster: BoosterStatus;
  }

  interface IProps{
    id:string;
  }

const rocketTelemetry = (props : IProps) => {

    const [missionStatus, setMissionStatus] = useState<ImissionStatus>( {
        rocket: 0,
        booster: 0
      });



    useEffect(() => {
        getMissionStatus();
        setInterval(() => {
            getMissionStatus();
        }, 3000);
    }, []);

    const getMissionStatus = () => {
        telemetryAPI.getStatus(props.id)
            .then(res => {
                console.log("===================>"+res.data);
                setMissionStatus(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Real Time Mission</h5>
                <p className="card-text">{`Rocket status: ${mapStatusToTextRocket[missionStatus.rocket]}`}</p>
                <p className="card-text">{`Booster status: ${mapStatusToTextBooster[missionStatus.booster]}`}</p>
                
            </div>
        </div>
    )
}

export default rocketTelemetry;