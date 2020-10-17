import { AxiosPromise } from 'axios';
import Payload from '../aggregate/Payload';
import MissionPayloadStatus from '../entities/MissionPayloadStatus';
import PayloadStatus from '../entities/PayloadStatus';
import API from './API';

class MissionAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_MISSION ?? "localhost";
        const port: String = process.env.PORT_MISSION ?? "3001";
        super(host, port)
    }

    public sendPayloadSeparationStatus<T>(missionPayloadStatus: MissionPayloadStatus): AxiosPromise {
        return this.axios({method: 'post',
        url: '/mission/rocketstatus',
       data: {missionPayloadStatus: missionPayloadStatus}});
    }

}

export default MissionAPI;