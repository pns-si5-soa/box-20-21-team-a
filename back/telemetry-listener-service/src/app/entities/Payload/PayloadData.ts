import PayloadStatus from "./PayloadStatus";

class PayloadData {

    private payloadStatus: PayloadStatus;
    private speed: number;
    private altitude: number;

    constructor(payloadStatus = PayloadStatus.ATTACHED, altitude = -1, speed = -1) {
        this.payloadStatus = payloadStatus;
        this.speed = speed;
        this.altitude = altitude;
    }

    getPayloadStatus(): PayloadStatus {
        return this.payloadStatus;
    }

    setPayloadStatus(value: number) {
        this.payloadStatus = value;
    }

    getAltitude(): number {
        return this.altitude;
    }

    setAltitude(value: number) {
        this.altitude = value;
    }

    getSpeed(): number {
        return this.speed;
    }

    setSpeed(value: number) {
        this.speed = value;
    }

    toObjectJSON(): Object {
        return {
                payloadStatus: this.payloadStatus,
                speed: this.speed,
                altitude: this.altitude,
        }
    }
}

export default PayloadData;
