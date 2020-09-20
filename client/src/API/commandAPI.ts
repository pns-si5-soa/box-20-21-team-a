import { AxiosPromise } from 'axios';
import API from './API'


class CommandAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_COMMAND ?? "localhost";
        const port: String = process.env.PORT_COMMAND ?? "3002";
        super(host, port)
    }

    public getCommandStatus<T>(): AxiosPromise<any> {
        return this.axios({method: 'post',
                            url:'/command/createpoll'});
    }
}


export default CommandAPI;