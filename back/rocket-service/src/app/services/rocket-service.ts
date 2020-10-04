export enum RocketStatus {
    NOT_READY = 0,
    READY_FOR_LAUNCH = 1,
    LAUNCHED = 2,
    IN_SECOND_STAGE = 3,
    PAYLOAD_DELIVERED = 4,
}

class rocketService{

    rocketStatus: RocketStatus;

    constructor() {
        this.rocketStatus = Math.floor(Math.random());
    }

    getStatus(): RocketStatus {
        return this.rocketStatus;
    }

    launch(): string {
        this.rocketStatus = RocketStatus.LAUNCHED;
        return "Launching Rocket...";
    }

    stageRocketMidFlight(): string {
        this.rocketStatus = RocketStatus.IN_SECOND_STAGE;
        return "The module has been successfully staged!";
    }
}


export default new rocketService();