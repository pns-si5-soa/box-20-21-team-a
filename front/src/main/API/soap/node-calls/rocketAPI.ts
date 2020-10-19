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

    public putRocketOnInternalPower<T>(): Promise<any> {
        var args = {};
        return new Promise((resolve, reject) =>
        {
            soap.createClient(this.urlSOAP, function (err: String, client: Client) {
                if(err != null){
                    reject(err);
                }
                client.putRocketOnInternalPower(args, function (err: String, result: Client) {
                    if(err != null){
                        reject(err);
                    }
                    resolve(result);
                });
            });
        });
    }

    public initializeStartupProcess<T>(): Promise<any> {
        var args = {};
        return new Promise((resolve, reject) =>
        {
            soap.createClient(this.urlSOAP, function (err: String, client: Client) {
                if(err != null){
                    reject(err);
                }
                client.initializeStartupProcess(args, function (err: String, result: Client) {
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