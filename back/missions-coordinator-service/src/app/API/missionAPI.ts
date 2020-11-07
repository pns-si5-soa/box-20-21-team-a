import {AxiosPromise} from 'axios';
import API from './API';

class MissionAPI extends API {

    public constructor() {
        if(process.env.HOST_MISSION == undefined) throw Error("port mission is missing on .env file");
        if(process.env.PORT_MISSION == undefined) throw Error("host mission is missing on .env file");
        const host: String = process.env.HOST_MISSION;
		const port: String = process.env.PORT_MISSION
        super(host, port)
    }

    public createMission(newMissionIdentifier : string) :AxiosPromise{
        return this.axios({
            method: 'post',
            url: '/mission',
            data: {id : newMissionIdentifier}
        });
    }
}

export default MissionAPI;