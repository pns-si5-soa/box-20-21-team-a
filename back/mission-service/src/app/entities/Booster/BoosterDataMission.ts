import BoosterStatus from "./BoosterStatus";
import Entitie from '../Entitie'

class BoosterDataMission extends Entitie {

    missionId : string;
    private boosterStatus : BoosterStatus;



    constructor( missionId:string,boosterStatus=BoosterStatus.ON_THE_ROCKET) {
        super()
        this.missionId = missionId;
        this.boosterStatus=boosterStatus;
        
    }

    toObjectJSON(): Object {
        return {
            missionId : this.missionId,
            boosterStatus: this.boosterStatus,
        };
    }

    assign(other: any): void {
        this.boosterStatus = other.boosterStatus
        this.id = other.id
    }
}
//ops.insertedIds:
export default BoosterDataMission