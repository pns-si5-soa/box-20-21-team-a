import API from './API';
import BoosterData from "../entities/BoosterData";
import {AxiosPromise} from "axios";
import BoosterStatus from "../entities/BoosterStatus";


class MissionAPI extends API {

    public constructor() {
        if(process.env.HOST_TELEMETRY == undefined) throw Error("host is missing on .env file");
		const host: String = process.env.HOST_TELEMETRY
        if(process.env.PORT_TELEMETRY == undefined) throw Error("port is missing on .env file");
		const port: String = process.env.PORT_TELEMETRY
        super(host, port)
    }

    public sendBoosterData<T>(boosterStatus: BoosterStatus,missionId:number): AxiosPromise {
        return this.axios({method: 'put',
            url: '/booster',
            data: {boosterStatus: boosterStatus,missionId:missionId}});
    }

}

export default MissionAPI;