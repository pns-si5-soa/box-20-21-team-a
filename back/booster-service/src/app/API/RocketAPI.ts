import {Client} from 'soap';
import API from './API';

var soap = require('soap');

class RocketAPI extends API {

    url: String;

    public constructor() {
        if(process.env.HOST_ROCKET == undefined) throw Error("host is missing on .env file");
		const host: String = process.env.HOST_ROCKET
        if(process.env.PORT_ROCKET == undefined) throw Error("port is missing on .env file");
		const port: String = process.env.PORT_ROCKET
        super(host, port);
        this.url = 'http://' + host + ':' + port + '/wsdl?wsdl';
    }

    public notifyLaunch<T>(): Promise<any> {
        var args = {name: 'value'};
        return soap.createClient(this.url, function (err: String, client: Client) {
            client.notifyLaunch(args, function (err: String, result: Client) {
                return result;
            });
        });
    }

    public initializeSecondEngineForSecondStage<T>(): Promise<any> {
        var args = {name: 'value'};
        return soap.createClient(this.url, function (err: String, client: Client) {
            client.initializeSecondEngineForSecondStage(args, function (err: String, result: Client) {
                return result;
            });
        });
    }
}

export default RocketAPI;