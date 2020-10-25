import {AxiosPromise} from 'axios';
import MissionPayloadStatus from '../entities/MissionPayloadStatus';
import API from './API';

class MissionAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_MISSION ?? "localhost";
        const port: String = process.env.PORT_MISSION ?? "3002";
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