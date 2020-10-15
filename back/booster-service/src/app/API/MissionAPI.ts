import API from './API';
import BoosterData from "../entities/BoosterData";
import {AxiosPromise} from "axios";


class MissionAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_TELEMETRY ?? "localhost";
        const port: String = process.env.PORT_TELEMETRY ?? "3003";
        super(host, port)
    }

    public sendBoosterData<T>(boosterData: BoosterData): AxiosPromise {
        return this.axios({method: 'post',
            url: '/mission/booster',
            data: {boosterData: boosterData.toObjectJSON()}});
    }

}

export default MissionAPI;