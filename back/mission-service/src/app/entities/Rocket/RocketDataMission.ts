import RocketStatus from "./RocketStatus";
import Entitie from "../Entitie";

interface IRocketData{
    rocketData: {
        rocketStatus: RocketStatus,
    }
}

class RocketDataMission extends Entitie {
    private rocketStatus: RocketStatus;


    constructor(rocketStatus = RocketStatus.PREPARATION) {
        super();
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