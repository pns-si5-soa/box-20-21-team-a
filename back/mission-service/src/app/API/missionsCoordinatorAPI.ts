import {AxiosPromise} from 'axios';
import API from './API';

class MissionsCoordinatorAPI extends API {

    public constructor() {
        if(process.env.HOST_MISSIONS_COORDINATOR == undefined) throw Error("host is missing on .env file");
		const host: String = process.env.HOST_MISSIONS_COORDINATOR
        if(process.env.PORT_MISSIONS_COORDINATOR == undefined) throw Error("port is missing on .env file");
		const port: String = process.env.PORT_MISSIONS_COORDINATOR
        super(host, port)
    }

    public createMission() :AxiosPromise{
        return this.axios({
            method: 'post',
            url: '/missions-coordinator',
        });
    }

}

export default MissionsCoordinatorAPI;