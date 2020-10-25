import {Client} from 'soap';

var soap = require('soap');

class BoosterAPI {

    urlSOAP: string;

    constructor() {
        const host: String = process.env.HOST_BOOSTER ?? "localhost";
        const port: String = process.env.PORT_BOOSTER ?? "3004";
        this.urlSOAP = 'http://' + host + ':' + port + '/wsdl?wsdl';
    }



    public destroyBoosterSOAPBack<T>(id:number): Promise<any> {
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