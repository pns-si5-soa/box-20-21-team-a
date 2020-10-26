import {AxiosPromise} from 'axios';
import API from './API';

class HeadStagesAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_HEAD_STAGES?? "localhost";
        if(process.env.PORT_HEAD_STAGES == undefined) throw Error("port is missing on .env file");
		const port: String = process.env.PORT_HEAD_STAGES
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