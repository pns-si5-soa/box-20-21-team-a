import { AxiosPromise } from 'axios';
import API from './API'

class RocketAPI extends API {

    public constructor() {
        if( process.env.HOST_ROCKET ?? == undefined ) throw Error("host is missing on .env file") 
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