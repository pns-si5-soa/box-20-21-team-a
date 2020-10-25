import {Client} from 'soap';

var soap = require('soap');


class PayloadAPI {

    urlSOAP: string;

    constructor() {
        const host: String = process.env.HOST_PAYLOAD ?? "localhost";
        const port: String = process.env.PORT_PAYLOAD ?? "3005";
        this.urlSOAP = 'http://' + host + ':' + port + '/wsdl?wsdl';
    }

    public deliverPayloadSOAPBack<T>(id:number): Promise<any> {
        var args = {
            'id' : id
        };
        return new Promise((resolve, reject) => 
        {
            soap.createClient(this.urlSOAP, function (err: String, client: Client) {
                if(err != null){
                    reject(err);
                }
                client.deliverPayload(args, function (err: String, result: Client) {
                    if(err != null){
                        reject(err);
                    }
                    resolve(result);
                });
            });
        });
    }

}

export default PayloadAPI;