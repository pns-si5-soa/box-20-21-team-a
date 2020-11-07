import {Client} from 'soap';

var soap = require('soap');


class RocketAPI {

    urlSOAP: string;

    constructor() {
        if(process.env.HOST_ROCKET_SOAP == undefined) throw Error("host node soap rocket is missing on .env file");
		const host: String = process.env.HOST_ROCKET_SOAP
        if(process.env.PORT_ROCKET_SOAP == undefined) throw Error("port node soap rocket is missing on .env file");
		const port: String = process.env.PORT_ROCKET_SOAP
        this.urlSOAP = 'http://' + host + ':' + port + '/wsdl?wsdl';
    }

    public destroyRocketSOAPBack<T>(id:string): Promise<any> {
        var args = {
            'id' : id
        };
        return new Promise((resolve, reject) => 
        {
            soap.createClient(this.urlSOAP, function (err: String, client: Client) {
                if(err != null){
                    reject(err);
                }
                client.destroy(args, function (err: String, result: Client) {
                    if(err != null){
                        reject(err);
                    }
                    resolve(result);
                });
            });
        });
    }
}

export default RocketAPI;