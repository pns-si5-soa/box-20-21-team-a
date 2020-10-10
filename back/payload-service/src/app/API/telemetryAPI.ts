import { AxiosPromise } from 'axios';
import Payload from '../entities/Payload';
import API from './API';
import "logs-module";

class TelemetryAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_TELEMETRY ?? "localhost";
        const port: String = process.env.PORT_TELEMETRY ?? "3003";
        super(host, port)
    }

    public setPayloadData<T>(payloadData: Payload): AxiosPromise {
        //log(payloadData.toObjectJSON());
        //log(" - -- - - - -  - -- -  - - - - -  - - - - - - - - - -- -  --  - -- - ");

        return this.axios({method: 'post',
        url: '/payload',
       data: {payloadData: payloadData.toObjectJSON()}});
    }

}

export default TelemetryAPI;