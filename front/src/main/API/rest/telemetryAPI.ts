import { AxiosPromise } from 'axios';
import API from './API';

class TelemetryAPI extends API {

    public constructor() {
        if(process.env.REACT_APP_HOST_TELEMETRY == undefined) throw Error("host telemetry is missing on .env file");
		const host: String = process.env.REACT_APP_HOST_TELEMETRY
        if(process.env.REACT_APP_PORT_TELEMETRY == undefined) throw Error("port telemetry is missing on .env file");
		const port: String = process.env.REACT_APP_PORT_TELEMETRY
        super(host, port)
    }

    public getRocketData<T>(id:string): AxiosPromise {
        return this.axios('/telemetry/rocket/'+id);
    }

    public getBoosterData<T>(id:string): AxiosPromise {
        return this.axios('/telemetry/booster/'+id);
    }

    public getPayloadData<T>(id:string): AxiosPromise {
        return this.axios('/telemetry/payload/'+id);
    }

}

export default TelemetryAPI;