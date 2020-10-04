import { AxiosPromise } from 'axios';
import API from './API';
import $ from 'jquery';
import 'jquery.soap';

class RocketAPI extends API {

    urlSOAP : string;

    constructor() { // fixme public is useless
        const host: String = process.env.HOST_ROCKET ?? "localhost";
        const port: String = process.env.PORT_ROCKET ?? "3000";
        super(host, port);
        this.urlSOAP =  'http://'+host+':'+port+'/wsdl?wsdl';
    }

    public getRocketStatus(): AxiosPromise {
        return this.axios('/rocket')
    } // fixme younes

    public launchRocket(): AxiosPromise {
        return this.axios({
            method: 'post',
            url: '/rocket/launch'
        });
    } // todo younes remove

    public stageRocketMidFlight(): AxiosPromise {
        return this.axios({
            method: 'post',
            url: '/rocket/stage'
        });
    }

    public launchRocketSOAP() : Promise<any>{
        return new Promise((resolve, reject) => {
            $.soap({
                url: this.urlSOAP,
                method: 'launch',

                data: {

                },
                success: function (soapResponse) {
                    var parser = new DOMParser();
                    var myxml = soapResponse.toString();
                    var xmlDoc = parser.parseFromString(myxml as string,"text/xml");
                    resolve(xmlDoc.getElementsByTagName("tns:launch")[0].childNodes[0].nodeValue);

                },
                error: function (SOAPResponse) {
                    reject(SOAPResponse);
                }
            });
        });
    }
}

export default RocketAPI;