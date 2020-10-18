import { AxiosPromise } from 'axios';
import API from './API'


class realTimeAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_REAL_TIME ?? "localhost";
        const port: String = process.env.PORT_REAL_TIME ?? "3110";
        super(host, port);
    }

    public getStatus(): AxiosPromise {
        return this.axios(
            '/mission'
        );
    }
}


export default realTimeAPI;