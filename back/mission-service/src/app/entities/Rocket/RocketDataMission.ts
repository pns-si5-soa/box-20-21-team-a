import RocketStatus from "./RocketStatus";
import Entitie from "../Entitie";

interface IRocketData{
    rocketData: {
        missionId: string,
        rocketStatus: RocketStatus,
    }
}

class RocketDataMission extends Entitie {
    private rocketStatus: RocketStatus;
    missionId : string


    constructor(rocketId:string,rocketStatus = RocketStatus.PREPARATION) {
        super();
        this.missionId = rocketId;
        this.rocketStatus = rocketStatus;
    }

    getRocketStatus() {
        return this.rocketStatus;
    }

    setRocketStatus(value: RocketStatus) {
        this.rocketStatus = value;
    }

    toObjectJSON(): IRocketData {
        return {
            rocketData: {
                missionId : this.missionId,
                rocketStatus: this.rocketStatus,
            }
        };
    }

    assign(other: any): void {
        this.rocketStatus = other.rocketStatus
        this.id = other.id
    }

}


export default RocketDataMission