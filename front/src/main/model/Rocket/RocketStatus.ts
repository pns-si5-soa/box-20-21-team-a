enum RocketStatus {
    NOT_READY = 0,
    READY_FOR_LAUNCH = 1,
    LAUNCHED = 2,
    DESTROYED = 3,
}

export const mapStatusToText = {
    0: "Not ready",
    1: "Ready for launch",
    2: "Launched",
    3: "Destroyed :(",
};

export default RocketStatus;