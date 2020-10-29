import React, {useState, useEffect} from 'react';
import TelemetryAPI from '../../../src/main/API/rest/telemetryAPI';
import PayloadData from '../../../src/main/model/Payload/PayloadData';
import {mapStatusToText} from '../../../src/main/model/Payload/PayloadStatus';
const telemetryAPI = new TelemetryAPI();

interface IProps {
    id: string;
}
const payloadTelemetry = (props: IProps) => {

    const [payloadData, setPayloadData] = useState(new PayloadData());


    useEffect(() => {
        setInterval(() => {
            getPayloadData();
        }, 3000);
    }, []);

    const getPayloadData = () => {
        telemetryAPI.getPayloadData(props.id)
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
                <p className="card-text">{`Payload Status: ${mapStatusToText[payloadData.payloadStatus]}`}</p>
                <p className="card-text">{`Payload speed: ${payloadData.speed}`}</p>
                <p className="card-text">{`Payload altitude: ${payloadData.altitude}`}</p>
            </div>
        </div>
    )
}

export default payloadTelemetry;