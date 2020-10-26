import API from '../../rest/API';
import $ from 'jquery';
import 'jquery.soap';


class PayloadAPI {

    urlSOAP: string;

    constructor() {
        if(process.env.HOST_PAYLOAD == undefined) throw Error("host is missing on .env file");
		const host: String = process.env.HOST_PAYLOAD
        if(process.env.PORT_PAYLOAD == undefined) throw Error("port is missing on .env file");
		const port: String = process.env.PORT_PAYLOAD
        this.urlSOAP = 'http://' + host + ':' + port + '/wsdl?wsdl';
    }

    // public deliverPayloadSOAPBack<T>(): Promise<any> {
    //     var args = {};
    //     return soap.createClient(this.urlSOAP, function (err: String, client: Client) {
    //         client.deliverPayload(args, function (err: String, result: Client) {
    //             return result;
    //         });
    //     });
    // }

    public deliverPayloadSOAP(id:number): Promise<any> {
        return new Promise((resolve, reject) => {
            $.soap({
                url: this.urlSOAP,
                method: 'deliverPayload',

                data: {
                    'id' : id
                },
                success: function (soapResponse) {
                    var parser = new DOMParser();
                    var myxml = soapResponse.toString();
                    var xmlDoc = parser.parseFromString(myxml as string, "text/xml");
                    if(xmlDoc.getElementsByTagName("payloadStatus") == null) console.error("Error : payloadStatus expected in the response but not found");
                    var stringToReturn = "Status : " + xmlDoc.getElementsByTagName("payloadStatus")[0].childNodes[0].nodeValue + " ,Altitude : " + xmlDoc.getElementsByTagName("speed")[0].childNodes[0].nodeValue! + ",Speed : " + xmlDoc.getElementsByTagName("altitude")[0].childNodes[0].nodeValue!;
                    resolve(stringToReturn);

                },
                error: function (SOAPResponse) {
                    reject(SOAPResponse);
                }
            });
        });
    }

}

export default PayloadAPI;