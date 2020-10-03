import { AxiosPromise } from 'axios';
import API from './API'

class TelemetryAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_TELEMETRY ?? "localhost";
        const port: String = process.env.PORT_TELEMETRY ?? "3003";
        super(host, port)
    }

    public getData<T>(): AxiosPromise<any> {
        return this.axios('/telemetry/data')
    }

    public getRocketStatus<T>(): AxiosPromise<any> {
        return this.axios('/telemetry/rocketstatus')
    }

    public addData<T>(): AxiosPromise<any> {
        return this.axios({method: 'post',
            url: '/telemetry/data',
            })
    }

    public modifyData<T>(rocketStatus : string, fuelStatus : string): AxiosPromise<any> {
        return this.axios({method: 'put',
            url: '/telemetry/data',
            data: {rocketStatus: rocketStatus, fuelStatus: fuelStatus}})
    }
}

export default TelemetryAPI;