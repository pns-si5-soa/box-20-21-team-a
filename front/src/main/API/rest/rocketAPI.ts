import { AxiosPromise } from 'axios';
import API from './API'

class RocketAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_ROCKET ?? "localhost";
        const port: String = process.env.PORT_ROCKET ?? "3008";
        super(host, port);
    }

    public drainFuelTank<T>(id: number): AxiosPromise<any> {
        return this.axios('/headstages/drainfuel/'+id)
    }

    public makeRocketFall<T>(id: number): AxiosPromise<any> {
        return this.axios('/headstages/makerocketfall/'+id)
    }
}

export default RocketAPI;