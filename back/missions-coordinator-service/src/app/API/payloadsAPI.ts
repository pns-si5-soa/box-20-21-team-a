import {AxiosPromise} from 'axios';
import API from './API';

class PayloadsAPI extends API {

    public constructor() {
        if(process.env.HOST_PAYLOAD == undefined) throw Error("host payload is missing on .env file");
        const host: String = process.env.HOST_PAYLOAD;
        if(process.env.PORT_PAYLOAD == undefined) throw Error("port payload is missing on .env file");
		const port: String = process.env.PORT_PAYLOAD
        super(host, port)
    }

    public createPayload(newMissionIdentifier : string) :AxiosPromise{
        return this.axios({
            method: 'post',
            url: '/payloads',
            data: {id : newMissionIdentifier}
        });
    }

}

export default PayloadsAPI;