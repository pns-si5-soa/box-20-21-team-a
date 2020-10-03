import { AxiosPromise } from 'axios';

class rocketService{
    [x: string]: any;

    rocket_status = ["Ready", "Not ready"]
    launched = false;

    getStatus(): string {
        const rocketStatus = this.rocket_status[Math.floor(Math.random() * this.rocket_status.length)]
        this.axios({method: 'put',
            url: '/telemetry/data',
            data: {rocketStatus: rocketStatus}});
        return rocketStatus
    }

    launch(): string {
        this.launched = true;
        return "Launching Rocket...";
    }

}


export default new rocketService();