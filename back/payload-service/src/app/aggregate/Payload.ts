import PayloadStatus from "../entities/PayloadStatus";
import {setIntervalConditionPromise} from "../tools/set_interval_x";
import TelemetryAPI from '../API/telemetryAPI';
import PayloadData from "../entities/PayloadData";
import Producer from "../producer";
import Consumer from "../consumer";


export default class Payload {

    private payloadBusConsumer: Consumer;
    private payloadBusProducer: Producer;

    payloadData: PayloadData;
    private telemetryAPI: TelemetryAPI = new TelemetryAPI();

    constructor(payloadId: string) {
        this.payloadData = new PayloadData(payloadId);

        this.payloadBusProducer = new Producer(payloadId.toString());
        this.payloadBusConsumer = new Consumer(payloadId.toString());
        this.payloadBusConsumer.run('rocket-' + payloadId + '-payload', (value: Object) => {
            this.triggerActionWhenReceiveBusSignal(value);
        });
    }

    private triggerActionWhenReceiveBusSignal(signal: any) {
        if (signal.action == 'updateDataFromHeadStageData') {
            this.payloadData.altitude = signal.headStageTelemetryData.altitude;
            this.payloadData.speed = signal.headStageTelemetryData.speed;
            this.telemetryAPI.sendPayloadData(this.payloadData);
        }
    }

    detach() {
        console.log("Detaching Payload...");
        this.payloadData.payloadStatus = PayloadStatus.IN_PROGRESS;
        // this.payloadData.speed = 10;
        // this.payloadData.altitude = 37000;
    }

    async progressingToOrbitalPosition() {
        const orbitalAltitude = this.payloadData.altitude - 20;
        console.log("Progressing to orbital position...");
        var that = this;
        await setIntervalConditionPromise(function () {
            that.payloadData.altitude -= that.payloadData.speed;
            // that.payloadData.speed += 5;
            if (process.env.NODE_ENV != "test") {
                that.telemetryAPI.sendPayloadData(that.payloadData);
            }

        }, process.env.NODE_ENV == "test" ? 0 : 1000, function () {
            return that.payloadData.altitude <= orbitalAltitude;
        });

        this.payloadData.payloadStatus = PayloadStatus.DETACHED;
        console.log("Payload now into orbit!");
    }

}
