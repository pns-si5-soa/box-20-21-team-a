import {AxiosPromise} from 'axios';
import API from './API';

class HeadStagesAPI extends API {

    public constructor() {
        if(process.env.PORT_HEAD_STAGES == undefined) throw Error("port headstages is missing on .env file");
        if(process.env.HOST_HEAD_STAGES == undefined) throw Error("host headstages is missing on .env file");
        const host: String = process.env.HOST_HEAD_STAGES;
		const port: String = process.env.PORT_HEAD_STAGES
        super(host, port)
    }

    public createHeadStage(newMissionIdentifier : string) :AxiosPromise{
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