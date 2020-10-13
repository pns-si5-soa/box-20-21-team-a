import RocketData from "../entities/RocketData";
import RocketStatus from "../entities/RocketStatus";

class rocketService { // TODO PascalCase

    rocketData : RocketData;

    constructor() {
        this.rocketData = new RocketData(RocketStatus.READY_FOR_LAUNCH,30,0,0,0);
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

export default new rocketService();