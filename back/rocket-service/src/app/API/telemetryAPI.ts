import { AxiosPromise } from 'axios';
import API from './API';

class TelemetryAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_TELEMETRY ?? "localhost";
        const port: String = process.env.PORT_TELEMETRY ?? "3003";
        super(host, port)
    }

    public sendData<T>(): AxiosPromise {
        return this.axios({method: 'post',
            url: '/telemetry/data',
            })
    } // TODO il faut envoyer un objet en argument

    public modifyData<T>(rocketStatus : string, fuelStatus : string): AxiosPromise {
        return this.axios({method: 'put',
            url: '/telemetry/data',
            data: {rocketStatus: rocketStatus, fuelStatus: fuelStatus}})
    } // todo tu peux surement enlever ce modify, on n'a besoin que d'envoyer des données
}

export default TelemetryAPI;