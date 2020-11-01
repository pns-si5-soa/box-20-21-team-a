import {AxiosPromise} from 'axios';
import API from './API';

class PollAPI extends API {

    public constructor() {
        if(process.env.HOST_POLL == undefined) throw Error("port poll is missing on .env file");
        if(process.env.PORT_POLL == undefined) throw Error("host poll is missing on .env file");
        const host: String = process.env.HOST_POLL;
		const port: String = process.env.PORT_POLL;
        super(host, port)
    }

    public createPoll(newMissionIdentifier : string) :AxiosPromise{
        return this.axios({
            method: 'post',
            url: '/poll',
            data: {id : newMissionIdentifier}
        });
    }
}

export default PollAPI;