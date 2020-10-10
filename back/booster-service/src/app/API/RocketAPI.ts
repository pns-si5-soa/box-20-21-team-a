import { Client } from 'soap';
import API from './API';
var soap = require('soap');
  
class RocketAPI extends API {

    url :String;
    public constructor() {
        const host: String = process.env.HOST_ROCKET ?? "localhost";
        const port: String = process.env.PORT_ROCKET ?? "3000";
        super(host, port);
        this.url = 'http://'+host+':'+port+'/wsdl?wsdl'
    }

    public notifyLaunch<T>(): Promise<any> {
        var args = {name: 'value'};
        return soap.createClient(this.url, function(err : String, client : Client) {
            client.notifyLaunch(args, function() {
                // Empty
            });
        });
    }
    public notifyBoosterDetachment<T>(): Promise<any> {
        var args = {name: 'value'};
        return soap.createClient(this.url, function(err : String, client : Client) {
            client.notifyBoosterDetachment(args, function(err : String, result : Client) {
                console.log(result);
            });
        });
    }

}

export default RocketAPI;