import { AxiosPromise } from 'axios';
import API from './API'

class WeatherAPI extends API {

    public constructor() {
        if(process.env.HOST_WEATHER == undefined) throw Error("host is missing on .env file");
		const host: String = process.env.HOST_WEATHER
        if(process.env.PORT_WEATHER == undefined) throw Error("port is missing on .env file");
		const port: String = process.env.PORT_WEATHER
        super(host, port)
    }

    public getWeather(): AxiosPromise {
        return this.axios('/weather')
    }
}

export default WeatherAPI;