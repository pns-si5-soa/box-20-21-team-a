import {AxiosPromise} from 'axios';
import API from './API';

class PayloadsAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_PAYLOAD?? "localhost";
        const port: String = process.env.PORT_PAYLOAD ?? "3009";
        super(host, port)
    }

    public createPayload(newMissionIdentifier : number) :AxiosPromise{
        return this.axios({
            method: 'post',
            url: '/payloads',
            data: {id : newMissionIdentifier}
        });
    }

}

export default PayloadsAPI;