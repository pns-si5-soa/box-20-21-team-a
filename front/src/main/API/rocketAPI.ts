import {AxiosPromise} from 'axios';
import API from './API';
import $ from 'jquery';
import 'jquery.soap';
import {Client} from 'soap';
var soap = require('soap');


class RocketAPI extends API {

    urlSOAP: string;

    constructor() {
        const host: String = process.env.HOST_ROCKET ?? "localhost";
        const port: String = process.env.PORT_ROCKET ?? "3000";
        super(host, port);
        this.urlSOAP = 'http://' + host + ':' + port + '/wsdl?wsdl';
    }

    public destroyRocketSOAPBack<T>(): Promise<any> {
        var args = {};
        return soap.createClient(this.urlSOAP, function (err: String, client: Client) {
            client.deliverPayload(args, function (err: String, result: Client) {
                return result;
            });
        });
    }
    
    public destroyRocket(): Promise<any>{
        return new Promise((resolve, reject) => {
            $.soap({
                url: this.urlSOAP,
                method: 'destroy',

                data: {

                },
                success: function (soapResponse) {
                    var parser = new DOMParser();
                    var myxml = soapResponse.toString();
                    var xmlDoc = parser.parseFromString(myxml as string,"text/xml");
                    resolve(xmlDoc.getElementsByTagName("tns:rocket")[0].childNodes[0].nodeValue);

                },
                error: function (SOAPResponse) {
                    reject(SOAPResponse);
                }
            });
        });
    }
    

}

export default RocketAPI;