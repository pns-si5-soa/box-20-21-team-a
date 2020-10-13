enum RocketStatus {
    NOT_READY = 0,
    READY_FOR_LAUNCH = 1,
    LAUNCHED = 2,
    BOOSTER_DETACHED = 3,
    WENT_THROUGH_MAX_Q = 4,
    DESTROYED = 5,
}

export const mapStatusToText = {
    0: "Not ready",
    1: "Ready for launch",
    2: "Launched",
    3: "Booster detached",
    4: "Went through max Q",
    5: "Destroyed :(",
};

export default RocketStatus;