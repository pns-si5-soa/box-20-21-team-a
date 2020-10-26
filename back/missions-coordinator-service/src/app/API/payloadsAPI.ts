import {AxiosPromise} from 'axios';
import API from './API';

class PayloadsAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_PAYLOAD?? "localhost";
        if(process.env.PORT_PAYLOAD == undefined) throw Error("port is missing on .env file");
		const port: String = process.env.PORT_PAYLOAD
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