import {AxiosPromise} from 'axios';
import API from './API';

class RealTimeAPI extends API {

    public constructor() {
        if(process.env.HOST_REAL_TIME == undefined) throw Error("host real-time is missing on .env file");
        const host: String = process.env.HOST_REAL_TIME;
        if(process.env.PORT_REAL_TIME == undefined) throw Error("port real-time is missing on .env file");
		const port: String = process.env.PORT_REAL_TIME
        super(host, port)
    }

    public createMission(newMissionIdentifier : number) :AxiosPromise{
        return this.axios({
            method: 'post',
            url: '/mission',
            data: {id : newMissionIdentifier}
        });
    }

}

export default RealTimeAPI;