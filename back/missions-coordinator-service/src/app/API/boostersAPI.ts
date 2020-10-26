import { AxiosPromise } from 'axios';

import API from './API';

class BoostersAPI extends API {

    public constructor() {
        if(process.env.HOST_BOOSTER == undefined) throw Error("host is missing on .env file");
		const host: String = process.env.HOST_BOOSTER
        if(process.env.PORT_BOOSTER == undefined) throw Error("port is missing on .env file");
		const port: String = process.env.PORT_BOOSTER
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