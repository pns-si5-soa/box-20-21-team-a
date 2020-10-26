import {Client} from 'soap';

var soap = require('soap');


class RocketAPI {

    urlSOAP: string;

    constructor() {
        if(process.env.HOST_ROCKET == undefined) throw Error("host is missing on .env file");
		const host: String = process.env.HOST_ROCKET
        if(process.env.PORT_ROCKET == undefined) throw Error("port is missing on .env file");
		const port: String = process.env.PORT_ROCKET
        this.urlSOAP = 'http://' + host + ':' + port + '/wsdl?wsdl';
    }

    public destroyRocketSOAPBack<T>(id:number): Promise<any> {
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

    public putRocketOnInternalPower<T>(id:number): Promise<any> {
        var args = {
            'id' : id
        };
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

    public initializeStartupProcess<T>(id:number): Promise<any> {
        var args = {
            'id' : id
        };
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