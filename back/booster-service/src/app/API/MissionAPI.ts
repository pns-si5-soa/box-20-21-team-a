import API from './API';
import BoosterData from "../entities/BoosterData";
import {AxiosPromise} from "axios";
import BoosterStatus from "../entities/BoosterStatus";


class MissionAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_TELEMETRY ?? "localhost";
        const port: String = process.env.PORT_TELEMETRY ?? "3002";
        super(host, port)
    }

    public sendBoosterData<T>(boosterStatus: BoosterStatus): AxiosPromise {
        return this.axios({method: 'put',
            url: '/booster',
            data: {boosterStatus: boosterStatus}});
    }

}

export default MissionAPI;