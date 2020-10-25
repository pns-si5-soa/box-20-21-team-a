import { AxiosPromise } from 'axios';
import API from './API'


class MissionsCoordinatorAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_MISSIONS_COORDINATOR ?? "localhost";
        const port: String = process.env.HOST_MISSIONS_COORDINATOR ?? "3007";
        super(host, port);
    }

    

    public getMissions(): AxiosPromise {
        return this.axios(
            '/missions-coordinator'
        );
    }
}


export default MissionsCoordinatorAPI;