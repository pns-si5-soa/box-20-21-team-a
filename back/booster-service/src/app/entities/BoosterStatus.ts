export enum BoosterStatus {
    NOT_LAUNCHED = 0,
    IN_FIRST_STAGE = 1,
    IN_SECOND_STAGE = 2,
    LANDED = 3,
    DESTROYED = 4,
}

export enum CurrentBoosterStatus {
    FLIP_MANEUVER,
    ENTRY_BURN,
    GUIDANCE,
    LANDING_BURN,
    LANDING_LEGS_DEPLOYED,
    LANDING,
}


