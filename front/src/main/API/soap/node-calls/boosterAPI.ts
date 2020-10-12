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
        return soap.createClient(this.urlSOAP, function (err: String, client: Client) {
            client.launchBooster(args, function (err: String, result: Client) {
                return result;
            });
        });
    }


    public destroyBoosterSOAPBack<T>(): Promise<any> {
        var args = {};
        return soap.createClient(this.urlSOAP, function (err: String, client: Client) {
            client.destroy(args, function (err: String, result: Client) {
                return result;
            });
        });
    }
}

export default BoosterAPI;