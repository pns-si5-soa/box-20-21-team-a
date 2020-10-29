import { AxiosPromise } from 'axios';
import API from './API'


class MissionAPI extends API {

    public constructor() {
        if(process.env.HOST_MISSION == undefined) throw Error("host is missing on .env file");
		const host: String = process.env.HOST_MISSION
        if(process.env.PORT_MISSION == undefined) throw Error("port is missing on .env file");
		const port: String = process.env.PORT_MISSION
        super(host, port);
    }

    public createPoll(): AxiosPromise {
        return this.axios({method: 'post',
                            url:'/poll/'});
    }


    public modifyPoll(serviceName: String | undefined,answer: String|undefined,id:string) : AxiosPromise {
        return this.axios({method: 'put',
                             url: '/poll',
                            data: {service_name: serviceName, answer: answer,id:id}});
    }

    public getPoll(): AxiosPromise {
        return this.axios(
            '/poll/:id'
        );
    }
}


export default MissionAPI;