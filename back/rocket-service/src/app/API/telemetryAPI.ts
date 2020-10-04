import { AxiosPromise } from 'axios';
import API from './API';
import TelemetryData from "../entities/telemetryData";

class TelemetryAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_TELEMETRY ?? "localhost";
        const port: String = process.env.PORT_TELEMETRY ?? "3003";
        super(host, port)
    }

    public sendData<T>(rocketStatus: string): AxiosPromise {
        return this.axios({
                method: 'post',
                url: '/telemetry/data',
                data: {rocketStatus}
            })
    }

}

export default TelemetryAPI;