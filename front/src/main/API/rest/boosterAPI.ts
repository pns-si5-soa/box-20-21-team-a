import { AxiosPromise } from 'axios';
import API from './API'

class BoosterAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_ROCKET ?? "localhost";
        const port: String = process.env.PORT_ROCKET ?? "3010";
        super(host, port);
    }

    public drainFuelTank<T>(id: number): AxiosPromise<any> {
        return this.axios('/boosters/drainfuel/'+id)
    }

}

export default BoosterAPI;