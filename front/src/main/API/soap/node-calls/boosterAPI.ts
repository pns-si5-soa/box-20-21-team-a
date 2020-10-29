import {Client} from 'soap';

var soap = require('soap');

class BoosterAPI {

    urlSOAP: string;

    constructor() {
        if(process.env.HOST_BOOSTER == undefined) throw Error("host is missing on .env file");
		const host: String = process.env.HOST_BOOSTER
        if(process.env.PORT_BOOSTER == undefined) throw Error("port is missing on .env file");
		const port: String = process.env.PORT_BOOSTER
        this.urlSOAP = 'http://' + host + ':' + port + '/wsdl?wsdl';
    }



    public destroyBoosterSOAPBack<T>(id:string): Promise<any> {
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

export default BoosterAPI;