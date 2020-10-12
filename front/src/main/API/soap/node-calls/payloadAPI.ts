import {Client} from 'soap';

var soap = require('soap');


class PayloadAPI {

    urlSOAP: string;

    constructor() {
        const host: String = process.env.HOST_PAYLOAD ?? "localhost";
        const port: String = process.env.PORT_PAYLOAD ?? "3005";
        this.urlSOAP = 'http://' + host + ':' + port + '/wsdl?wsdl';
    }

    public deliverPayloadSOAPBack<T>(): Promise<any> {
        var args = {};
        return soap.createClient(this.urlSOAP, function (err: String, client: Client) {
            client.deliverPayload(args, function (err: String, result: Client) {
                return result;
            });
        });
    }

}

export default PayloadAPI;