export enum RocketStatus {
    NOT_READY = 0,
    READY_FOR_LAUNCH = 1,
    IN_FIRST_STAGE = 2,
    IN_SECOND_STAGE = 3,
    PAYLOAD_DELIVERED = 4,
}

export const mapRocketStatusKeys = {
    0: "Not ready",
    1: "Ready for launch",
    2: "In first stage of flight",
    3: "In second stage of flight",
    4: "Payload delivered",
}

console.log(mapRocketStatusKeys[1]);

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