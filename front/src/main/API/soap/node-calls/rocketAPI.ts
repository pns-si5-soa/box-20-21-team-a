import {Client} from 'soap';

var soap = require('soap');


class RocketAPI {

    urlSOAP: string;

    constructor() {
        const host: String = process.env.HOST_ROCKET ?? "localhost";
        const port: String = process.env.PORT_ROCKET ?? "3000";
        this.urlSOAP = 'http://' + host + ':' + port + '/wsdl?wsdl';
    }

    public destroyRocketSOAPBack<T>(): Promise<any> {
        var args = {};
        return new Promise((resolve, reject) => 
        {
            soap.createClient(this.urlSOAP, function (err: String, client: Client) {
                client.destroy(args, function (err: String, result: Client) {
                    resolve(result);
                });
            });
        });
    }
}

export default RocketAPI;