import { AxiosPromise } from 'axios';
import API from './API'


class realTimeAPI extends API {

    public constructor() {
        if(process.env.HOST_REAL_TIME == undefined) throw Error("host is missing on .env file");
		const host: String = process.env.HOST_REAL_TIME
        if(process.env.PORT_REAL_TIME == undefined) throw Error("port is missing on .env file");
		const port: String = process.env.PORT_REAL_TIME
        super(host, port);
    }

    public getStatus(id:number): AxiosPromise {
        return this.axios(
            '/mission'+'/'+id
        );
    }
}


export default realTimeAPI;