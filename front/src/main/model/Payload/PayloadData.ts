import PayloadStatus from "./PayloadStatus";


class PayloadData{
     payloadStatus: PayloadStatus;
     speed : number;
     altitude : number;

    constructor(payloadStatus=PayloadStatus.ATTACHED,altitude = -1,speed = -1) {
        this.payloadStatus=payloadStatus;
        this.speed = speed;
        this.altitude = altitude;
    }

    getPayloadStatus() : PayloadStatus{
        return this.payloadStatus;
    }

    setPayloadStatus(value : PayloadStatus){
        this.payloadStatus=value;
    }

    getAltitude(): number{
        return this.altitude;
    }

    setAltitude(value : number){
        this.altitude=value;
    }

    getSpeed() : number{
        return this.speed;
    }

    setSpeed(value : number){
        this.speed=value;
    }


}

export default PayloadData