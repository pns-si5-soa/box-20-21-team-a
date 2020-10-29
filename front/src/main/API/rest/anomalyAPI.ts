import { AxiosPromise } from 'axios';
import API from './API'


class AnomalyAPI extends API {

    public constructor() {
        if(process.env.HOST_ANOMALY == undefined) throw Error("host is missing on .env file");
		const host: String = process.env.HOST_ANOMALY
        if(process.env.PORT_ANOMALY == undefined) throw Error("port is missing on .env file");
		const port: String = process.env.PORT_ANOMALY
        super(host, port);
    }

    public getAnomaly(missionId : string): AxiosPromise {
        return this.axios(
            '/anomaly/'+missionId
        );
    }

}


export default AnomalyAPI;