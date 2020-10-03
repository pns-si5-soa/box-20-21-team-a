import { AxiosPromise } from 'axios';
import API from './API'

class WeatherAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_WEATHER ?? "localhost";
        const port: String = process.env.PORT_WEATHER ?? "3001";
        super(host, port)
    }

    public getWeather(): AxiosPromise<any> {
        return this.axios('/weather')
    }
}

export default WeatherAPI;