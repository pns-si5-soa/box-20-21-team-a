import { AxiosPromise } from 'axios';
import API from './API'


class realTimeAPI extends API {

    public constructor() {
        if(process.env.REACT_APP_HOST_REAL_TIME == undefined) throw Error("host real-time is missing on .env file");
		const host: String = process.env.REACT_APP_HOST_REAL_TIME
        if(process.env.REACT_APP_PORT_REAL_TIME == undefined) throw Error("port real-time is missing on .env file");
		const port: String = process.env.REACT_APP_PORT_REAL_TIME
        super(host, port);
    }

    public getStatus(id:string): AxiosPromise {
        return this.axios(
            '/mission'+'/'+id
        );
    }
}


export default realTimeAPI;