import { AxiosPromise } from 'axios';
import API from './API'

class BoosterAPI extends API {

    public constructor() {
        if(process.env.REACT_APP_HOST_BOOSTER == undefined) throw Error("host booster is missing on .env file");
		const host: String = process.env.REACT_APP_HOST_BOOSTER
        if(process.env.REACT_APP_PORT_BOOSTER == undefined) throw Error("port booster is missing on .env file");
		const port: String = process.env.REACT_APP_PORT_BOOSTER
        super(host, port);
    }

    public drainFuelTank<T>(id: string): AxiosPromise<any> {
        return this.axios('/boosters/drainfuel/'+id)
    }

}

export default BoosterAPI;