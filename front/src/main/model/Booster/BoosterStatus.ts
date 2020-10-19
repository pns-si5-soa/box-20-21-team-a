export enum BoosterStatus {
    ON_THE_ROCKET = 0,
    FLIP_MANEUVER = 1,
    ENTRY_BURN = 2,
    GUIDANCE = 3,
    LANDING_BURN = 4,
    LANDING_LEGS_DEPLOYED = 5,
    LANDING = 6,
    LANDED = 7,
    DESTROYED = 8,
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