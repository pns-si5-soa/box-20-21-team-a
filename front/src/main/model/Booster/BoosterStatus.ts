export enum BoosterStatus {
    NOT_LAUNCHED = 0,
    IN_FIRST_STAGE = 1,
    IN_SECOND_STAGE = 2,
    LANDED = 3,
    DESTROYED = 4,
}

export const mapStatusToText = {
    0: "Not launched",
    1: "In first stage of flight",
    2: "In second stage",
    3: "Landed",
    4: "Destroyed :(",
};