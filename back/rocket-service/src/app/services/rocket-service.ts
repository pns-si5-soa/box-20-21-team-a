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
    getStatus(): string {
        this.rocketStatus = Math.floor(Math.random() * 2);
        return this.rocketStatus.toString();
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


}


export default new rocketService();