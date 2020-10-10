import API from './API';
import $ from 'jquery';
import 'jquery.soap';

class BoosterAPI extends API {

    urlSOAP: string;

    constructor() {
        const host: String = process.env.HOST_BOOSTER ?? "localhost";
        const port: String = process.env.PORT_BOOSTER ?? "3004";
        super(host, port);
        this.urlSOAP = 'http://' + host + ':' + port + '/wsdl?wsdl';
    }

    public launchBoosterSOAP() : Promise<any>{
        return new Promise((resolve, reject) => {
            $.soap({
                url: this.urlSOAP,
                method: 'launchBooster',
    
                data: {
    
                },
                success: function (soapResponse) {
                    var parser = new DOMParser();
                    var myxml = soapResponse.toString();
                    var xmlDoc = parser.parseFromString(myxml as string,"text/xml");
                    resolve(xmlDoc.getElementsByTagName("tns:booster")[0].childNodes[0].nodeValue);
    
                },
                error: function (SOAPResponse) {
                    reject(SOAPResponse);
                }
            });
        });
    }

    public destroyBooster() : Promise<any>{
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
                    resolve(xmlDoc.getElementsByTagName("tns:booster")[0].childNodes[0].nodeValue);
    
                },
                error: function (SOAPResponse) {
                    reject(SOAPResponse);
                }
            });
        });
    }
}

export default BoosterAPI;