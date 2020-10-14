import PayloadStatus from "./PayloadStatus";

export default class PayloadData{
     payloadStatus: PayloadStatus;
     speed: number;
     altitude: number;

        constructor(){
            this.speed = 0;
            this.altitude = 0;
            this.payloadStatus = PayloadStatus.ATTACHED;
        }

        toObjectJSON(){
            return {
                speed : this.speed,
                altitude : this.altitude,
                payloadStatus: this.payloadStatus
                    }
        }

}