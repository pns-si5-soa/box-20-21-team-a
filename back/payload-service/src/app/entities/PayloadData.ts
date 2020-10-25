import PayloadStatus from "./PayloadStatus";

export default class PayloadData{

    payloadId: number;
    payloadStatus: PayloadStatus;
    speed: number;
    altitude: number;

    constructor(payloadId : number){
        this.payloadId = payloadId;
        this.speed = 0;
        this.altitude = 0;
        this.payloadStatus = PayloadStatus.ATTACHED;
    }

    toObjectJSON(){
        return {
            missionId: this.payloadId,
            speed : this.speed,
            altitude : this.altitude,
            payloadStatus: this.payloadStatus
                }
    }

}