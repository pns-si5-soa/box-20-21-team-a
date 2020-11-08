import React, {useEffect, useState} from 'react';
import TelemetryAPI from '../../../src/main/API/rest/telemetryAPI';
import RocketData from '../../../src/main/model/Rocket/RocketData';
import {mapStatusToText} from "../../../src/main/model/Rocket/RocketStatus";

const telemetryAPI = new TelemetryAPI();

interface IProps {
    id: string;
}
const rocketTelemetry = (props: IProps) => {

    const [rocketData, setRocketData] = useState<RocketData | null>(null);

    useEffect(() => {
        setInterval(() => {
            getRocketData();
        }, 3000);
    }, []);

    const getRocketData = () => {
        telemetryAPI.getRocketData(props.id)
            .then(res => {
                console.log(res.data);
                if(res.data != null && res.data != undefined && res.data != "")
                    setRocketData(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    if(rocketData !== null)
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Rocket</h5>
                <p className="card-text">{`Status: ${mapStatusToText[rocketData.rocketStatus]}`}</p>
                <p className="card-text">{`Altitude: ${rocketData.altitude}`}km</p>
                <p className="card-text">{`Fuel Level: ${rocketData.fuelLevel}`}L</p>
                <p className="card-text">{`Speed: ${rocketData.speed}`}km.s-1</p>
                <p className="card-text">{`Pressure: ${rocketData.pressure}`}</p>
            </div>
        </div>
    )

    else return <p></p>
}

export default rocketTelemetry;