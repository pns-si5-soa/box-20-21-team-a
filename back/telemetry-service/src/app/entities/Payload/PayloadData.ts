import PayloadStatus from "./PayloadStatus";
import Entitie from "../Entitie";

interface IPayloadData{
    payloadData: {
        payloadStatus: PayloadStatus,
        altitude: number,
        speed: number,
    }
}

class PayloadData extends Entitie{

    private payloadStatus: PayloadStatus;
    private speed: number;
    private altitude: number;

    constructor(payloadStatus = PayloadStatus.ATTACHED, altitude = -1, speed = -1) {
        super();
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

    assign(other: any): void {
        this.altitude = other.altitude
        this.speed = other.speed
        this.payloadStatus = other.payloadStatus
        this.id = other.id
    }
}

export default PayloadData;
