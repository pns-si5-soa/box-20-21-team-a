import BoosterStatus from "./BoosterStatus";
import Entitie from '../Entitie'

class BoosterDataMission extends Entitie {
    private boosterStatus : BoosterStatus;



    constructor( boosterStatus=BoosterStatus.ON_THE_ROCKET) {
        super()
        this.boosterStatus=boosterStatus;
    }

    toObjectJSON(): Object {
        return {
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