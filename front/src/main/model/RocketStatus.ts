export enum RocketStatus {
    NOT_READY = 0,
    READY_FOR_LAUNCH = 1,
    LAUNCHED = 2,
    IN_SECOND_STAGE = 3,
    PAYLOAD_DELIVERED = 4,
}

export const mapRocketStatusKeys = [
    "Not ready",
    "Ready for launch",
    "Launched, in first stage of flight",
    "In second stage of flight",
    "Payload delivered",
];