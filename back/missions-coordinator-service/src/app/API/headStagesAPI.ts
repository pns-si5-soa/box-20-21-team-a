import {AxiosPromise} from 'axios';
import API from './API';

class HeadStagesAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_HEAD_STAGES?? "localhost";
        const port: String = process.env.PORT_HEAD_STAGES ?? "3008";
        super(host, port)
    }

    public createHeadStage(newMissionIdentifier : number) :AxiosPromise{
        return this.axios({
            method: 'post',
            url: '/headstages',
            data: {id : newMissionIdentifier}
        });
    }

   /* public sendPayloadSeparationStatus<T>(missionPayloadStatus: MissionPayloadStatus): AxiosPromise {
        return this.axios({
            method: 'put',
            url: '/rocket',
            data: {rocketStatus : missionPayloadStatus}
        });
    }*/

}

export default HeadStagesAPI;