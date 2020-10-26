import {Client} from 'soap';

let soap = require('soap');

class BoosterAPI {

    urlSOAP: string;

    constructor() {
        if(process.env.HOST_BOOSTER == undefined) throw Error("host is missing on .env file");
		const host: String = process.env.HOST_BOOSTER
        if(process.env.PORT_BOOSTER == undefined) throw Error("port is missing on .env file");
		const port: String = process.env.PORT_BOOSTER
        this.urlSOAP = 'http://' + host + ':' + port + '/wsdl?wsdl';
    }

    public launchBooster<T>(): Promise<any> {
        let args = {};
        return new Promise((resolve, reject) => {
            soap.createClient(this.urlSOAP, function (err: String, client: Client) {
                client.launchBooster(args, function (err: String, result: Client) {
                    resolve(result);
                });
            });
        });
    }
}

export default BoosterAPI;