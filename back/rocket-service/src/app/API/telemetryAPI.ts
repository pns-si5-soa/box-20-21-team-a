import {AxiosPromise} from 'axios';
import API from './API';
import RocketData from "../entities/RocketData";

class TelemetryAPI extends API {

    public constructor() {
        if(process.env.HOST_TELEMETRY == undefined) throw Error("host is missing on .env file");
		const host: String = process.env.HOST_TELEMETRY
        if(process.env.PORT_TELEMETRY == undefined) throw Error("port is missing on .env file");
		const port: String = process.env.PORT_TELEMETRY
        super(host, port)
    }

    public sendData<T>(rocketData: RocketData): AxiosPromise {
        return this.axios({
            method: 'post',
            url: '/telemetry/rocket',
            data: {rocketData}
        })
    }
}

export default TelemetryAPI;