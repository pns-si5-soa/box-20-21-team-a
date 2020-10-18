import $ from 'jquery';
import 'jquery.soap';


class RocketAPI {

    urlSOAP: string;

    constructor() {
        const host: String = process.env.HOST_ROCKET ?? "localhost";
        const port: String = process.env.PORT_ROCKET ?? "3000";
        this.urlSOAP = 'http://' + host + ':' + port + '/wsdl?wsdl';
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
                    if(xmlDoc.getElementsByTagName("tns:rocketService") == undefined) console.error("Error : tns:rocket expected in the response but not found");
  
                    resolve(xmlDoc.getElementsByTagName("tns:rocketService")[0].childNodes[0].nodeValue);

                },
                error: function (SOAPResponse) {
                    reject(SOAPResponse);
                }
            });
        });
    }

    public putRocketOnInternalPower(): Promise<any>{
        return new Promise((resolve, reject) => {
            $.soap({
                url: this.urlSOAP,
                method: 'putRocketOnInternalPower',

                data: {

                },
                success: function (soapResponse) {
                    var parser = new DOMParser();
                    var myxml = soapResponse.toString();
                    var xmlDoc = parser.parseFromString(myxml as string,"text/xml");
                    if(xmlDoc.getElementsByTagName("tns:rocketService") == undefined) console.error("Error : tns:rocket expected in the response but not found");

                    resolve(xmlDoc.getElementsByTagName("tns:rocketService")[0].childNodes[0].nodeValue);

                },
                error: function (SOAPResponse) {
                    reject(SOAPResponse);
                }
            });
        });
    }

    public initializeStartupProcess(): Promise<any>{
        return new Promise((resolve, reject) => {
            $.soap({
                url: this.urlSOAP,
                method: 'initializeStartupProcess',

                data: {

                },
                success: function (soapResponse) {
                    var parser = new DOMParser();
                    var myxml = soapResponse.toString();
                    var xmlDoc = parser.parseFromString(myxml as string,"text/xml");
                    if(xmlDoc.getElementsByTagName("tns:rocketService") == undefined) console.error("Error : tns:rocket expected in the response but not found");

                    resolve(xmlDoc.getElementsByTagName("tns:rocketService")[0].childNodes[0].nodeValue);

                },
                error: function (SOAPResponse) {
                    reject(SOAPResponse);
                }
            });
        });
    }

    public putRocketOnInternalPower(): Promise<any>{
        return new Promise((resolve, reject) => {
            $.soap({
                url: this.urlSOAP,
                method: 'putRocketOnInternalPower',

                data: {

                },
                success: function (soapResponse) {
                    var parser = new DOMParser();
                    var myxml = soapResponse.toString();
                    var xmlDoc = parser.parseFromString(myxml as string,"text/xml");
                    if(xmlDoc.getElementsByTagName("tns:rocket") == null) console.error("Error : tns:rocket expected in the response but not found");

                    resolve(xmlDoc.getElementsByTagName("tns:rocket")[0].childNodes[0].nodeValue);

                },
                error: function (SOAPResponse) {
                    reject(SOAPResponse);
                }
            });
        });
    }

    public initializeStartupProcess(): Promise<any>{
        return new Promise((resolve, reject) => {
            $.soap({
                url: this.urlSOAP,
                method: 'initializeStartupProcess',

                data: {

                },
                success: function (soapResponse) {
                    var parser = new DOMParser();
                    var myxml = soapResponse.toString();
                    var xmlDoc = parser.parseFromString(myxml as string,"text/xml");
                    if(xmlDoc.getElementsByTagName("tns:rocket") == null) console.error("Error : tns:rocket expected in the response but not found");

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