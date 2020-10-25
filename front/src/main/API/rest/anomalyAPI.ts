import { AxiosPromise } from 'axios';
import API from './API'


class AnomalyAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_ANOMALY ?? "localhost";
        const port: String = process.env.PORT_ANOMALY ?? "3013";
        super(host, port);
    }

    public getAnomaly(missionId : number): AxiosPromise {
        return this.axios(
            '/anomaly/'+missionId
        );
    }

}


export default AnomalyAPI;