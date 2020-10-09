import { AxiosPromise } from 'axios';
import API from './API';

class TelemetryAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_TELEMETRY ?? "localhost";
        const port: String = process.env.PORT_TELEMETRY ?? "3003";
        super(host, port)
    }

    public getRocketData<T>(): AxiosPromise {
        return this.axios('/telemetry/rocket/');
    }

    public getBoosterData<T>(): AxiosPromise {
        return this.axios('/telemetry/booster/');
    }

    public getPayloadData<T>(): AxiosPromise {
        return this.axios('/telemetry/payload');
    }

}

export default TelemetryAPI;