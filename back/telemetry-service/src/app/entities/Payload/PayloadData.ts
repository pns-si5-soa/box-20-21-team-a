import PayloadStatus from "./PayloadStatus";


class PayloadData{
    private payloadStatus: PayloadStatus;

    constructor(payloadStatus=PayloadStatus.ATTACHED) {
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