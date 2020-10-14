import {Client} from 'soap';

var soap = require('soap');

class BoosterAPI {

    urlSOAP: string;

    constructor() {
        const host: String = process.env.HOST_BOOSTER ?? "localhost";
        const port: String = process.env.PORT_BOOSTER ?? "3004";
        this.urlSOAP = 'http://' + host + ':' + port + '/wsdl?wsdl';
    }

    public launchBoosterSOAPBack<T>(): Promise<any> {
        var args = {};
        return new Promise((resolve, reject) => 
        {
            soap.createClient(this.urlSOAP, function (err: String, client: Client) {
                client.launchBooster(args, function (err: String, result: Client) {
                    resolve(result);
                });
            });
        });
    }


    public destroyBoosterSOAPBack<T>(): Promise<any> {
        var args = {};
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