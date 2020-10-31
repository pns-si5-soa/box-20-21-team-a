import {AxiosPromise} from 'axios';
import API from './API';
import RocketStatus from "../entities/RocketStatus";

class TelemetryAPI extends API {

    public constructor() {
        if(process.env.HOST_MISSION == undefined) throw Error("host is missing on .env file");
		const host: String = process.env.HOST_MISSION
        if(process.env.PORT_MISSION == undefined) throw Error("port is missing on .env file");
		const port: String = process.env.PORT_MISSION
        super(host, port)
    }

    public sendData<T>(rocketStatus: RocketStatus,missionId : string): AxiosPromise {
        return this.axios({
            method: 'put',
            url: '/rocket',
            data: {rocketStatus,missionId:missionId}
        })
    }
}

export default TelemetryAPI;