export enum RocketStatus {
    NOT_READY = 0,
    READY_FOR_LAUNCH = 1,
    LAUNCHED = 2,
    IN_SECOND_STAGE = 3,
    PAYLOAD_DELIVERED = 4,
}

class rocketService {

    rocketStatus: RocketStatus;

    constructor() {
        this.rocketStatus = Math.floor(Math.random() * 2);
    }

    getStatus(): string {
        if (this.rocketStatus === 0 || this.rocketStatus === 1) {
            this.rocketStatus = Math.floor(Math.random() * 2);
        }
        return this.rocketStatus.toString();
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