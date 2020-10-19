import {AxiosPromise} from 'axios';
import API from './API';
import BoosterData from '../entities/BoosterData';

class TelemetryAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_TELEMETRY ?? "localhost";
        const port: String = process.env.PORT_TELEMETRY ?? "3003";
        super(host, port)
    }

    public sendBoosterData<T>(boosterData: BoosterData): AxiosPromise {
        return this.axios({
            method: 'post',
            url: '/telemetry/booster',
            data: {boosterData}
        });
    }

}

export default TelemetryAPI;