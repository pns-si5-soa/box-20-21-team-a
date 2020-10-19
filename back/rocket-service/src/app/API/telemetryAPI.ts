import {AxiosPromise} from 'axios';
import API from './API';
import RocketData from "../entities/RocketData";

class TelemetryAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_TELEMETRY ?? "localhost";
        const port: String = process.env.PORT_TELEMETRY ?? "3003";
        super(host, port)
    }

    public sendData<T>(rocketData: RocketData): AxiosPromise {
        return this.axios({
            method: 'post',
            url: '/telemetry/rocket',
            data: {rocketData}
        })
    }
}

export default TelemetryAPI;