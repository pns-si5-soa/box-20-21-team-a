import React from 'react';
import BoosterTelemetry from './boosterTelemetry'
import RocketTelemetry from './rocketTelemetry'
import PayloadTelemetry from './payloadTelemetry'

interface IProps {
    id: number;
}


const TelemetryMonitor = (props: IProps) => {

    return (
        <>
            <br></br>
            <br></br>
            <h2>Telemetry monitoring</h2>
            <div className="row">
                <div className="col-sm">
                    <RocketTelemetry id={props.id} />
                </div>
                <div className="col-sm">
                    <BoosterTelemetry id={props.id} />
                </div>
                <div className="col-sm">
                    <PayloadTelemetry id={props.id} />
                </div>
            </div>
        </>
    )

};

export default TelemetryMonitor;