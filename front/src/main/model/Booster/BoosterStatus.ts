export enum BoosterStatus {
    ON_THE_ROCKET,
    FLIP_MANEUVER,
    ENTRY_BURN,
    GUIDANCE,
    LANDING_BURN,
    LANDING_LEGS_DEPLOYED,
    LANDING,
    LANDED,
    DESTROYED,
}


export const mapStatusToText = {
    0: "On the rocket",
    1: "Flip maneuver",
    2: "Entry burn",
    3: "Guidance",
    4: "Landing burn",
    5: "Landing legs deployed",
    6: "Landing",
    7: "Landed",
    8: "Destroyed :(",
};