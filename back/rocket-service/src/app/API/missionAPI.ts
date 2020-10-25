import {AxiosPromise} from 'axios';
import API from './API';
import RocketStatus from "../entities/RocketStatus";

class TelemetryAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_MISSION ?? "localhost";
        const port: String = process.env.PORT_MISSION ?? "3002";
        super(host, port)
    }

    public sendData<T>(rocketStatus: RocketStatus,missionId : number): AxiosPromise {
        return this.axios({
            method: 'put',
            url: '/rocket',
            data: {rocketStatus,missionId:missionId}
        })
    }
}

export default TelemetryAPI;