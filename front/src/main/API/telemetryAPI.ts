import { AxiosPromise } from 'axios';
import API from './API';

class TelemetryAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_TELEMETRY ?? "localhost";
        const port: String = process.env.PORT_TELEMETRY ?? "3003";
        super(host, port)
    }

    public getRocketData<T>(): AxiosPromise {
        return this.axios('/telemetry/rocketdata/');
    }

    public getBoosterData<T>(): AxiosPromise {
        return this.axios('/telemetry/boosterdata/');
    }

    public getPayloadData<T>(): AxiosPromise {
        return this.axios('/telemetry/payloaddata/');
    }

}

export default TelemetryAPI;