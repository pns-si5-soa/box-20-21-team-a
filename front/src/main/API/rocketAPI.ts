import { AxiosPromise } from 'axios';
import API from './API';

class RocketAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_ROCKET ?? "localhost";
        const port: String = process.env.PORT_ROCKET ?? "3000";
        super(host, port);
    }

    public getRocketStatus(): AxiosPromise {
        return this.axios('/rocket')
    }

    public launchRocket(): AxiosPromise {
        return this.axios({
            method: 'post',
            url: '/rocket/launch'
        });
    }

    public stageRocketMidFlight(): AxiosPromise {
        return this.axios({
            method: 'post',
            url: '/rocket/stage'
        });
    }
}


export default RocketAPI;