import {AxiosPromise} from 'axios';
import API from './API';

class PayloadsAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_REAL_TIME?? "localhost";
        const port: String = process.env.PORT_REAL_TIME ?? "3006";
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

export default PayloadsAPI;