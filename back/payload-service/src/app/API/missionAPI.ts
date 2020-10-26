import {AxiosPromise} from 'axios';
import MissionPayloadStatus from '../entities/MissionPayloadStatus';
import API from './API';

class MissionAPI extends API {

    public constructor() {
        if(process.env.HOST_MISSION == undefined) throw Error("host is missing on .env file");
		const host: String = process.env.HOST_MISSION
        if(process.env.PORT_MISSION == undefined) throw Error("port is missing on .env file");
		const port: String = process.env.PORT_MISSION
        super(host, port)
    }

    public sendPayloadSeparationStatus<T>(missionPayloadStatus: MissionPayloadStatus,missionId:number): AxiosPromise {
        return this.axios({
            method: 'put',
            url: '/rocket',
            data: {rocketStatus : missionPayloadStatus,missionId:missionId}
        });
    }

}

export default MissionAPI;