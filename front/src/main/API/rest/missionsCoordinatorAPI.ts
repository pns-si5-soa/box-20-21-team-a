import {AxiosPromise} from 'axios';
import API from './API'


class MissionsCoordinatorAPI extends API {

    public constructor() {
        if(process.env.REACT_APP_HOST_MISSIONS_COORDINATOR == undefined) throw Error("host missions-c is missing on .env file");
		const host: String = process.env.REACT_APP_HOST_MISSIONS_COORDINATOR
        if(process.env.REACT_APP_PORT_MISSIONS_COORDINATOR == undefined) throw Error("port missions-c is missing on .env file");
		const port: String = process.env.REACT_APP_PORT_MISSIONS_COORDINATOR
        super(host, port);
    }

    public createMission(): AxiosPromise {
        return this.axios.post(
            '/missions-coordinator'
        );
    }

    public getMissions(): AxiosPromise {
        return this.axios(
            '/missions-coordinator'
        );
    }
}


export default MissionsCoordinatorAPI;