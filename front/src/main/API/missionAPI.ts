import { AxiosPromise } from 'axios';
import API from './API'


class MissionAPI extends API {

    public constructor() {
        const host: String = process.env.HOST_MISSION ?? "localhost";
        const port: String = process.env.PORT_MISSION ?? "3002";
        super(host, port)
    }

    public createPoll(): AxiosPromise<any> {
        return this.axios({method: 'post',
                            url:'/poll/'});
    }


    public modifyPoll(serviceName: String | undefined,answer: String|undefined) : AxiosPromise<any> {
        return this.axios({method: 'put',
                             url: '/poll',
                            data: {service_name: serviceName, answer: answer}});
    }

    public getPoll(): AxiosPromise<any> {
        return this.axios(
<<<<<<< #42-separate-code:client/src/API/missionAPI.ts
            '/poll'
=======
            '/mission/getpoll'
        );
    }

    public getRocketStatus(): AxiosPromise<any>{
        return this.axios(
            '/mission/getrocketstatus'
        );
    }

    public getWeatherStatus(): AxiosPromise<any>{
        return this.axios(
            '/mission/getweatherstatus'
>>>>>>> #45 Adding cucumber on front:front/src/main/API/missionAPI.ts
        );
    }
}


export default MissionAPI;