import { AxiosPromise } from 'axios';

import API from './API';

class BoostersAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_BOOSTER ?? "localhost";
        const port: String = process.env.PORT_BOOSTER ?? "3010";
        super(host, port)
    }

    public createBooster(newMissionIdentifier : number) :AxiosPromise{
        return this.axios({
            method: 'post',
            url: '/boosters',
            data: {id : newMissionIdentifier}
        });
    }

}

export default BoostersAPI;