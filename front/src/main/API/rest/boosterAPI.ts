import { AxiosPromise } from 'axios';
import API from './API'

class BoosterAPI extends API {

    public constructor() {
        if( process.env.HOST_ROCKET ?? == undefined ) throw Error("host is missing on .env file") 
        const port: String = process.env.PORT_ROCKET ?? "3010";
        super(host, port);
    }

    public drainFuelTank<T>(id: number): AxiosPromise<any> {
        return this.axios('/boosters/drainfuel/'+id)
    }

}

export default BoosterAPI;