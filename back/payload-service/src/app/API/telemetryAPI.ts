import { AxiosPromise } from 'axios';
import Payload from '../aggregate/Payload';
import PayloadData from '../entities/PayloadData';
import API from './API';

class TelemetryAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_TELEMETRY ?? "localhost";
        const port: String = process.env.PORT_TELEMETRY ?? "3003";
        super(host, port)
    }

    public setPayloadData<T>(payloadData: PayloadData): AxiosPromise {
        //log(payloadData.toObjectJSON());
        //log(" - -- - - - -  - -- -  - - - - -  - - - - - - - - - -- -  --  - -- - ");
        return this.axios({method: 'post',
        url: '/telemetry/payload',
       data: {payloadData: payloadData.toObjectJSON()}});
    }

}

export default TelemetryAPI;