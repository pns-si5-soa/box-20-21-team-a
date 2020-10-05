import { AxiosPromise } from 'axios';
import API from './API';
import TelemetryData from "../entities/telemetryData";
import { RocketStatus } from '../services/rocket-service';

class TelemetryAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_TELEMETRY ?? "localhost";
        const port: String = process.env.PORT_TELEMETRY ?? "3003";
        super(host, port)
    }

    public sendData<T>(rocketStatus: RocketStatus, fuelLevel: number): AxiosPromise {
        return this.axios({
                method: 'post',
                url: '/telemetry/data',
                data: {rocketStatus: rocketStatus.toString(), fuelLevel}
            })
    }

}

export default TelemetryAPI;