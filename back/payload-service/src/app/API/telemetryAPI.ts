import {AxiosPromise} from 'axios';
import PayloadData from '../entities/PayloadData';
import API from './API';

class TelemetryAPI extends API {

    public constructor() {
        if(process.env.HOST_TELEMETRY == undefined) throw Error("host is missing on .env file");
		const host: String = process.env.HOST_TELEMETRY
        if(process.env.PORT_TELEMETRY == undefined) throw Error("port is missing on .env file");
		const port: String = process.env.PORT_TELEMETRY
        super(host, port)
    }

    public sendPayloadData<T>(payloadData: PayloadData): AxiosPromise {
        //log(payloadData.toObjectJSON());
        //log(" - -- - - - -  - -- -  - - - - -  - - - - - - - - - -- -  --  - -- - ");
        return this.axios({method: 'post',
        url: '/telemetry/payload',
       data: {payloadData: payloadData.toObjectJSON()}});
    }

}

export default TelemetryAPI;