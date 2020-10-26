import $ from 'jquery';
import 'jquery.soap';


class RocketAPI {

    urlSOAP: string;

    constructor() {
        if(process.env.HOST_ROCKET == undefined) throw Error("host is missing on .env file");
		const host: String = process.env.HOST_ROCKET
        if(process.env.PORT_ROCKET == undefined) throw Error("port is missing on .env file");
		const port: String = process.env.PORT_ROCKET
        this.urlSOAP = 'http://' + host + ':' + port + '/wsdl?wsdl';
    }
    
    public destroyRocket(id:number): Promise<any>{
        return new Promise((resolve, reject) => {
            $.soap({
                url: this.urlSOAP,
                method: 'destroy',

                data: {
                    'id' : id
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

    public putRocketOnInternalPower(id:number): Promise<any>{
        return new Promise((resolve, reject) => {
            $.soap({
                url: this.urlSOAP,
                method: 'putRocketOnInternalPower',

                data: {
                    'id' : id
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

    public initializeStartupProcess(id:number): Promise<any>{
        return new Promise((resolve, reject) => {
            $.soap({
                url: this.urlSOAP,
                method: 'initializeStartupProcess',

                data: {
                    'id' : id
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


    

}

export default RocketAPI;