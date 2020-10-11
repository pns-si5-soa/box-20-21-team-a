import {AxiosPromise} from 'axios';
import API from './API';
import $ from 'jquery';
import 'jquery.soap';
import {Client} from 'soap';
var soap = require('soap');


class PayloadAPI extends API {

    urlSOAP: string;

    constructor() {
        const host: String = process.env.HOST_PAYLOAD ?? "localhost";
        const port: String = process.env.PORT_PAYLOAD ?? "3005";
        super(host, port);
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

    public deliverPayloadSOAP() : Promise<any>{
        return new Promise((resolve, reject) => {
            $.soap({
                url: this.urlSOAP,
                method: 'deliverPayload',
    
                data: {
    
                },
                success: function (soapResponse) {
                    var parser = new DOMParser();
                    var myxml = soapResponse.toString();
                    var xmlDoc = parser.parseFromString(myxml as string,"text/xml");
                    var stringToReturn = "Status : "+xmlDoc.getElementsByTagName("payloadStatus")[0].childNodes[0].nodeValue+" ,Altitude : "+xmlDoc.getElementsByTagName("speed")[0].childNodes[0].nodeValue! + ",Speed : " +xmlDoc.getElementsByTagName("altitude")[0].childNodes[0].nodeValue!;
                    resolve(stringToReturn );
    
                },
                error: function (SOAPResponse) {
                    reject(SOAPResponse);
                }
            });
        });
    }
    
}

export default PayloadAPI;