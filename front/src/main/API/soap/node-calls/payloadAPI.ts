import {Client} from 'soap';

var soap = require('soap');


class PayloadAPI {

    urlSOAP: string;

    constructor() {
        if(process.env.HOST_PAYLOAD == undefined) throw Error("host is missing on .env file");
		const host: String = process.env.HOST_PAYLOAD
        if(process.env.PORT_PAYLOAD == undefined) throw Error("port is missing on .env file");
		const port: String = process.env.PORT_PAYLOAD
        this.urlSOAP = 'http://' + host + ':' + port + '/wsdl?wsdl';
    }

    public deliverPayloadSOAPBack<T>(id:string): Promise<any> {
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