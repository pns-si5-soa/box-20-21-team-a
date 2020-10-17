enum RocketStatus {
    NOT_READY = 0,
    READY_FOR_LAUNCH = 1,
    LAUNCHED = 2,
    BOOSTER_DETACHED = 3,
    WENT_THROUGH_MAX_Q = 4,
    DESTROYED = 5,
}

enum CurrentRocketStatus {
    PREPARATION = 0,
    ON_INTERNAL_POWER = 1,
    STARTUP = 2,
    MAIN_ENGINE_STARTED = 3,
    LAUNCHED = 4,
    MAX_Q_REACHED = 5,
    MAIN_ENGINE_CUT_OFF = 6,
    BOOSTER_DETACHED = 7,
    SECOND_ENGINE_START = 8,
    FAIRING_SEPARATION = 9,
    SECOND_ENGINE_CUT_OFF = 10,
}

export default RocketStatus;


