enum RocketStatus {
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
    DESTROYED = 99,
}

export const mapStatusToText = {
    0: "On preparation",
    1: "On internal power",
    2: "Startup",
    3: "Main engine starting",
    4: "Launched",
    5: "Reached max Q",
    6: "Main engine cut-off",
    7: "Stage separation",
    8: "Second engine starting",
    9: "Fairing separation",
    10: "Second engine cut-off",
    99: "Destroyed :(",
};

export default RocketStatus;