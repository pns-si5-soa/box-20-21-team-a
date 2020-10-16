import Rocket from "../entities/Rocket";
import RocketStatus from "../entities/RocketStatus";
import RocketData from "../entities/RocketData";

class RocketController {

    rocket: Rocket;

    constructor() {
        this.rocket = new Rocket(
            new RocketData(
                RocketStatus.PREPARATION, 30, 0, 50, 0));
    }

    // For tests only
    getStatus(): RocketStatus {
        return this.rocket.getRocketStatus();
    }

    async launch(): Promise<void> {
        await this.rocket.notifyLaunch();
    }

    destroy(): void {
        this.rocket.destroy();
    }

    async initializeRocketEngines(): Promise<void> {
        await this.rocket.initializeEngines();
    }
}

export default new RocketController();