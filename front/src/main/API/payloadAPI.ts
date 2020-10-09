import {AxiosPromise} from 'axios';
import API from './API';
import $ from 'jquery';
import 'jquery.soap';

class PayloadAPI extends API {

    urlSOAP: string;

    constructor() {
        const host: String = process.env.HOST_ROCKET ?? "localhost";
        const port: String = process.env.PORT_ROCKET ?? "3005";
        super(host, port);
        this.urlSOAP = 'http://' + host + ':' + port + '/wsdl?wsdl';
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