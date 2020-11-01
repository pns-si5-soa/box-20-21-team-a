import { AxiosPromise } from 'axios';
import API from './API'


class PollAPI extends API {

    public constructor() {
        if(process.env.REACT_APP_HOST_POLL == undefined) throw Error("host poll is missing on .env file");
		const host: String = process.env.REACT_APP_HOST_POLL
        if(process.env.REACT_APP_PORT_POLL == undefined) throw Error("port poll is missing on .env file");
		const port: String = process.env.REACT_APP_PORT_POLL
        super(host, port);
    }

    
    public modifyPoll(serviceName: String | undefined,answer: String|undefined,id:string) : AxiosPromise {
        return this.axios({method: 'put',
                             url: '/poll',
                            data: {service_name: serviceName, answer: answer,id:id}});
    }

    public getPoll(): AxiosPromise {
        console.log("requestPoll");
        return this.axios(
            '/poll/:id'
        );
    }
}


export default PollAPI;