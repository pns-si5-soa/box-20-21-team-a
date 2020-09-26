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


    public modifyPoll<T>(serviceName: String | undefined,answer: String|undefined) : AxiosPromise<any> {
        return this.axios({method: 'put',
                             url: '/mission/modifypoll/'+serviceName+'/'+answer});
    }

    public getPoll<T>(): AxiosPromise<any> {
        return this.axios(
            '/mission/getpoll'
        );
    }
}


export default MissionAPI;