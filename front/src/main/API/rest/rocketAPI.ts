import { AxiosPromise } from 'axios';
import API from './API'

class RocketAPI extends API {

    public constructor() {
        if(process.env.REACT_APP_HOST_ROCKET == undefined) throw Error("host rocket is missing on .env file");
		const host: String = process.env.REACT_APP_HOST_ROCKET
        if(process.env.REACT_APP_PORT_ROCKET == undefined) throw Error("port rocket is missing on .env file");
		const port: String = process.env.REACT_APP_PORT_ROCKET
        super(host, port);
    }

    public drainFuelTank<T>(id: string): AxiosPromise<any> {
        return this.axios('/headstages/drainfuel/'+id)
    }

    public makeRocketFall<T>(id: string): AxiosPromise<any> {
        return this.axios('/headstages/makerocketfall/'+id)
    }
}

export default RocketAPI;