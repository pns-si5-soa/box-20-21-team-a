import React from 'react';
import BoosterTelemetry from './boosterTelemetry'
import RocketTelemetry from './rocketTelemetry'
import PayloadTelemetry from './payloadTelemetry'


const TelemetryMonitor = () => {

    return (
        <>
            <br></br>
            <br></br>
            <h2>Telemetry monitoring</h2>
            <div className="row">
                <div className="col-sm">
                    <RocketTelemetry />
                </div>
                <div className="col-sm">
                    <BoosterTelemetry />
                </div>
                <div className="col-sm">
                    <PayloadTelemetry />
                </div>
            </div>
        </>
    )

};

export default TelemetryMonitor;