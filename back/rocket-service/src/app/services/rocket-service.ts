import TelemetryAPI from "../API/telemetryAPI";
import RocketData from "../entities/RocketData";
import RocketStatus from "../entities/RocketStatus";

class rocketService { // TODO PascalCase

    rocketData : RocketData;

    constructor() {
        this.rocketData = new RocketData(RocketStatus.READY_FOR_LAUNCH,10,0,0,0);
    }

    // For tests only
    getStatus(): RocketStatus {
        return this.rocketData.getRocketStatus();
    }

    launch(): string {
        this.rocketData.notifyLaunch();
        return "Launching Rocket...";
    }

    destroy(): void {
        this.rocketData.destroy();

    }

    initializeRocketEngines(): void {
        this.rocketData.initializeEngines();
    }
}

export default new rocketService();