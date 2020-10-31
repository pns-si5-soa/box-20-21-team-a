import { AxiosPromise } from 'axios';
import API from './API'


class AnomalyAPI extends API {

    public constructor() {
        if(process.env.REACT_APP_HOST_ANOMALY == undefined) throw Error("host anomaly is missing on .env file");
		const host: String = process.env.REACT_APP_HOST_ANOMALY
        if(process.env.REACT_APP_PORT_ANOMALY == undefined) throw Error("port anomaly is missing on .env file");
		const port: String = process.env.REACT_APP_PORT_ANOMALY
        super(host, port);
    }

    public getAnomaly(missionId : string): AxiosPromise {
        return this.axios(
            '/anomaly/'+missionId
        );
    }

}


export default AnomalyAPI;