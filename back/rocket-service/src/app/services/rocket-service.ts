import TelemetryAPI from "../API/telemetryAPI";

export enum RocketStatus {
    NOT_READY = 0,
    READY_FOR_LAUNCH = 1,
    LAUNCHED = 2,
    IN_SECOND_STAGE = 3,
    PAYLOAD_DELIVERED = 4,
}

class rocketService { // TODO PascalCase!

    telemetryAPI = new TelemetryAPI();
    rocketStatus: RocketStatus;

    constructor() {
        this.rocketStatus = RocketStatus.READY_FOR_LAUNCH;
        this.telemetryAPI.sendData(this.rocketStatus.toString());
    }

    // For tests only
    getStatus(): RocketStatus {
        return this.rocketStatus;
    }

    launch(): string {
        this.rocketStatus = RocketStatus.LAUNCHED;
        this.telemetryAPI.sendData(this.rocketStatus.toString());
        return "Launching Rocket...";
    }

    stageRocketMidFlight(): string {
        this.rocketStatus = RocketStatus.IN_SECOND_STAGE;
        this.telemetryAPI.sendData(this.rocketStatus.toString());
        return "The module has been successfully staged!";
    }

    deliverPayload(): string {
        this.rocketStatus = RocketStatus.PAYLOAD_DELIVERED;
        console.log(this.rocketStatus);
        this.telemetryAPI.sendData(this.rocketStatus.toString());
        return "The payload has been successfully delivered!\nThe mission is a success \\o/";
    }
}

export default new rocketService();