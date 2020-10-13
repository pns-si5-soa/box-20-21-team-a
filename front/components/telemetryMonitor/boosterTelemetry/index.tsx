import React, {useState, useEffect} from 'react';
import TelemetryAPI from '../../../src/main/API/rest/telemetryAPI';
import BoosterData from '../../../src/main/model/Booster/BoosterData';
import {mapStatusToText} from "../../../src/main/model/Booster/BoosterStatus";

const telemetryAPI = new TelemetryAPI();

const boosterTelemetry = () => {

    const [boosterData, setBoosterData] = useState(new BoosterData());

    useEffect(() => {
        setInterval(() => {
            getBoosterData();
        }, 3000);
    }, []);

    const getBoosterData = () => {
        telemetryAPI.getBoosterData()
            .then(res => {
                console.log(res.data);
                setBoosterData(res.data);
            })
            .catch((err) => {
                console.error(err)
            });
    }

    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Booster</h5>
                <p className="card-text">{`Booster Status: ${mapStatusToText[boosterData.boosterStatus]}`}</p>
                <p className="card-text">{`Altitude: ${boosterData.altitude}`}km</p>
                <p className="card-text">{`Fuel Level: ${boosterData.fuelLevel}`}L</p>
                <p className="card-text">{`Speed: ${boosterData.speed}`}km.s-1</p>
            </div>
        </div>
    )
}

export default boosterTelemetry;