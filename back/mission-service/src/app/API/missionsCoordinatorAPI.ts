import {AxiosPromise} from 'axios';
import API from './API';

class MissionsCoordinatorAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_MISSIONS_COORDINATOR?? "localhost";
        const port: String = process.env.PORT_MISSIONS_COORDINATOR ?? "3007";
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