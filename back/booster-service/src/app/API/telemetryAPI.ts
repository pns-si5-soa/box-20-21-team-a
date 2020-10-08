import { AxiosPromise } from 'axios';
import BoosterData from '../entities/BoosterData';
import API from './API';

class TelemetryAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_TELEMETRY ?? "localhost";
        const port: String = process.env.PORT_TELEMETRY ?? "3003";
        super(host, port)
    }

    public sendBoosterData<T>(boosterData: BoosterData): AxiosPromise {
        return this.axios({method: 'post',
        url: '/booster',
       data: {boosterData: boosterData.toObjectJSON()}});
    }

}

export default TelemetryAPI;