import react, {useState, useEffect} from 'react';
import TelemetryAPI from '../../../src/main/API/telemetryAPI';
import PayloadData from '../../../src/main/model/Payload/PayloadData';

const telemetryAPI = new TelemetryAPI();

const payloadTelemetry = () => {

    const [payloadData, setPayloadData] = useState(new PayloadData());

    useEffect(() => {
        setInterval(() => {
            getPayloadData();
        }, 1000);
    }, []);

    const getPayloadData = () => {
        telemetryAPI.getPayloadData()
            .then(res => {
                console.log(res.data);
                setPayloadData(res.data);
            })
            .catch((err) => {
                console.error(err)
            });
    }

    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Payload</h5>
                <p className="card-text">{`Payload Status: ${payloadData.payloadStatus}`}</p>
            </div>
        </div>
    )
}

export default payloadTelemetry;