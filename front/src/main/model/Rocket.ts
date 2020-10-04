import {RocketStatus} from "./RocketStatus";

class Rocket {

    rocketStatus: RocketStatus;

    constructor() {
        this.rocketStatus = RocketStatus.NOT_READY;
    }

    getRocketStatus(): RocketStatus {
        return this.rocketStatus;
    }

    setRocketStatus(rocketStatus: RocketStatus): void {
        this.rocketStatus = rocketStatus;
    }
}

export default Rocket