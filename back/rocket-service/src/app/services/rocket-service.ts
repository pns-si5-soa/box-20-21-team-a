import TelemetryAPI from "../API/telemetryAPI";
import RocketData from "../entities/RocketData"

export enum RocketStatus {
    NOT_READY = 0,
    READY_FOR_LAUNCH = 1,
    LAUNCHED = 2,
    DESTROYED,
}

class rocketService { // TODO PascalCase!

    telemetryAPI = new TelemetryAPI();
    rocketData : RocketData;

    constructor() {
        this.rocketData = new RocketData(RocketStatus.READY_FOR_LAUNCH,10,0,0,0);
        this.telemetryAPI.sendData(this.rocketData);
    }

    // For tests only
    getStatus(): RocketStatus {
        return this.rocketData.getRocketStatus();
    }

    launch(): string {
        this.rocketData.setRocketStatus(RocketStatus.LAUNCHED);
        this.rocketData.setFuelLevel(9);
        this.rocketData.launch();
        this.telemetryAPI.sendData(this.rocketData);
        return "Launching Rocket...";
    }

    stageRocketMidFlight(): string {
        this.rocketStatus = RocketStatus.IN_SECOND_STAGE;
        this.telemetryAPI.sendData(this.rocketStatus, 5);
        return "The module has been successfully staged!";
    }

    deliverPayload(): string {
        this.rocketStatus = RocketStatus.PAYLOAD_DELIVERED;
        console.log(this.rocketStatus);
        this.telemetryAPI.sendData(this.rocketStatus, 2);
        return "The payload has been successfully delivered!\nThe mission is a success \\o/";
    }
}

export default new rocketService();