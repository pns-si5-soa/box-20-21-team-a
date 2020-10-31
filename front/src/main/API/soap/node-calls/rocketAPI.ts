import {Client} from 'soap';

var soap = require('soap');


class RocketAPI {

    urlSOAP: string;

    constructor() {
        if(process.env.REACT_APP_HOST_ROCKET == undefined) throw Error("host node soap rocket is missing on .env file");
		const host: String = process.env.REACT_APP_HOST_ROCKET
        if(process.env.REACT_APP_PORT_ROCKET == undefined) throw Error("port node soap rocket is missing on .env file");
		const port: String = process.env.REACT_APP_PORT_ROCKET
        this.urlSOAP = 'http://' + host + ':' + port + '/wsdl?wsdl';
    }

    public destroyRocketSOAPBack<T>(id:string): Promise<any> {
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

    public putRocketOnInternalPower<T>(id:string): Promise<any> {
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

    public initializeStartupProcess<T>(id:string): Promise<any> {
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