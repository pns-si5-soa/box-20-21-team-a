import { AxiosPromise } from 'axios';
import API from './API';

class TelemetryAPI extends API {

    public constructor() {
        if(process.env.HOST_TELEMETRY == undefined) throw Error("host is missing on .env file");
		const host: String = process.env.HOST_TELEMETRY
        if(process.env.PORT_TELEMETRY == undefined) throw Error("port is missing on .env file");
		const port: String = process.env.PORT_TELEMETRY
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