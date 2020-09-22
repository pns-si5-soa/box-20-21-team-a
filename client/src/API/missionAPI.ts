import { AxiosPromise } from 'axios';
import API from './API'


class MissionAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_MISSION ?? "localhost";
        const port: String = process.env.PORT_MISSION ?? "3002";
        super(host, port)
    }

    public createPoll<T>(): AxiosPromise<any> {
        return this.axios({method: 'post',
                            url:'/mission/createpoll'});
    }
}


export default MissionAPI;