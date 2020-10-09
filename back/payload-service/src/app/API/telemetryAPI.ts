import { AxiosPromise } from 'axios';
import Payload from '../entities/Payload';
import API from './API';

class TelemetryAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_TELEMETRY ?? "localhost";
        const port: String = process.env.PORT_TELEMETRY ?? "3003";
        super(host, port)
    }

    public setPayloadData<T>(payloadData: Payload): AxiosPromise {
        console.log(payloadData.toObjectJSON());
        console.log(" - -- - - - -  - -- -  - - - - -  - - - - - - - - - -- -  --  - -- - ");

        return this.axios({method: 'post',
        url: '/payload',
       data: {payloadData: payloadData.toObjectJSON()}});
    }

}

export default TelemetryAPI;