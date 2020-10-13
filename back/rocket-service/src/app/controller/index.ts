import Rocket from "../entities/Rocket";
import RocketStatus from "../entities/RocketStatus";

class RocketController { // TODO PascalCase

    rocketData : Rocket;

    constructor() {
        this.rocketData = new Rocket(RocketStatus.READY_FOR_LAUNCH,30,0,0,0);
    }

    // For tests only
    getStatus(): RocketStatus {
        return this.rocketData.getRocketStatus();
    }

    async launch(): Promise<void> {
        await this.rocketData.notifyLaunch();
    }

    destroy(): void {
        this.rocketData.destroy();

    }

    async initializeRocketEngines(): Promise<void> {
        await this.rocketData.initializeEngines();
    }
}

export default new RocketController();