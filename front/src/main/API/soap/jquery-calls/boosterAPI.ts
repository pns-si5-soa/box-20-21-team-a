import $ from 'jquery';
import 'jquery.soap';

class BoosterAPI {

    urlSOAP: string;

    constructor() {
        if(process.env.REACT_APP_HOST_BOOSTER == undefined) throw Error("host soap booster is missing on .env file");
		const host: String = process.env.REACT_APP_HOST_BOOSTER
        if(process.env.REACT_APP_PORT_BOOSTER == undefined) throw Error("port soap booster is missing on .env file");
		const port: String = process.env.REACT_APP_PORT_BOOSTER
        this.urlSOAP = 'http://' + host + ':' + port + '/wsdl?wsdl';
    }

    public destroyBooster(id:string) : Promise<any>{
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
                    if(xmlDoc.getElementsByTagName("tns:booster") == null) console.error("Error : tns:booster expected in the response but not found");
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