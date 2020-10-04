import { AxiosPromise } from 'axios';
import TelemetryAPI from "../API/telemetryAPI";


class rocketService{
    [x: string]: any;
    telemetryAPI = new TelemetryAPI();
    rocket_status = ["Ready", "Not ready"]
    launched = false;

    //Test method
    getStatus(){
        const rocketStatus = this.rocket_status[Math.floor(Math.random() * this.rocket_status.length)];
        return rocketStatus;
    }

    launch(): string {
        this.launched = true;
        const rocketStatus = this.rocket_status[Math.floor(Math.random() * this.rocket_status.length)]
        this.telemetryAPI.sendData(rocketStatus);
        return "Launching Rocket...";
    }
}


export default new rocketService();