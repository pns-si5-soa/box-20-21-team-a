import {PayloadStatus} from "./PayloadStatus";


class PayloadData{
    payloadStatus: PayloadStatus;

    constructor(payloadStatus=PayloadStatus.NOT_DELIVERED) {
        this.payloadStatus=payloadStatus;
    }

    getPayloadStatus(){
        return this.payloadStatus;
    }

    setPayloadStatus(value : number){
        this.payloadStatus=value;
    }
}

export default PayloadData