import react, {useState, useEffect} from 'react';
import TelemetryAPI from '../../../src/main/API/telemetryAPI';
import RocketData from '../../../src/main/model/Rocket/RocketData';

const telemetryAPI = new TelemetryAPI();

const rocketTelemetry = () => {

    const [rocketData, setrocketData] = useState(new RocketData());

    useEffect(() => {
        setInterval(() => {
            getrocketData();
        }, 1000);
    }, []);

    const getrocketData = () => {
        telemetryAPI.getRocketData()
            .then(res => {
                console.log(res.data);
                setrocketData(res.data);
            })
            .catch((err) => {
                console.error(err)
            });
    }

    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Rocket</h5>
                <p className="card-text">{`Altitude: ${rocketData.altitude}`}km</p>
                <p className="card-text">{`Fuel Level: ${rocketData.fuelLevel}`}L</p>
                <p className="card-text">{`Speed: ${rocketData.speed}`}km.s-1</p>
                <p className="card-text">{`Pressure: ${rocketData.pressure}`}</p>
            </div>
        </div>
    )
}

export default rocketTelemetry;