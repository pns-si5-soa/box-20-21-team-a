export enum RocketStatus {
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
    PAYLOAD_SEPARATION_STATUS_FOR_MISSION = 11,
    DESTROYED = 99,
}

export const mapStatusToText = {
    0: "On preparation",
    1: "On internal power",
    2: "Startup",
    3: "Main engine started",
    4: "Launched",
    5: "Reached max Q",
    6: "Main engine cut-off",
    7: "Stage separation",
    8: "Second engine started",
    9: "Fairing separation",
    10: "Second engine cut-off",
    11: "Payload delivered!",
    99: "Destroyed :(",
};

export default RocketStatus;