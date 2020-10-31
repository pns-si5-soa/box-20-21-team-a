import { AxiosPromise } from 'axios';
import API from './API'

class WeatherAPI extends API {

    public constructor() {
        if(process.env.REACT_APP_HOST_WEATHER == undefined) throw Error("host weather is missing on .env file");
		const host: String = process.env.REACT_APP_HOST_WEATHER
        if(process.env.REACT_APP_PORT_WEATHER == undefined) throw Error("port weather is missing on .env file");
		const port: String = process.env.REACT_APP_PORT_WEATHER
        super(host, port)
    }

    public getWeather(): AxiosPromise {
        return this.axios('/weather')
    }
}

export default WeatherAPI;