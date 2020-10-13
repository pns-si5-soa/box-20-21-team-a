import { AxiosPromise } from 'axios';
import API from './API';
import Rocket from "../entities/Rocket"

class TelemetryAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_TELEMETRY ?? "localhost";
        const port: String = process.env.PORT_TELEMETRY ?? "3003";
        super(host, port)
    }

    public sendData<T>(rocketData: Rocket): AxiosPromise {
        return this.axios({
                method: 'post',
                url: '/telemetry/rocket',
                data: {rocketData}
            })
    }
}

export default TelemetryAPI;