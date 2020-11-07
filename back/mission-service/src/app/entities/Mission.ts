import RocketStatus from "./Rocket/RocketStatus";
import BoosterStatus from "./Booster/BoosterStatus";


export default class Mission{

    private boosterMissionStatus: BoosterStatus;
    private rocketMissionStatus: RocketStatus;


    constructor() {
        this.boosterMissionStatus = BoosterStatus.ON_THE_ROCKET;
        this.rocketMissionStatus = RocketStatus.PREPARATION;
    }

    getBoosterMissionStatus() : BoosterStatus {
        return this.boosterMissionStatus;
    }

    modifyBoosterMissionStatus(boosterStatus: BoosterStatus){
        this.boosterMissionStatus = boosterStatus;
    }

    getRocketMissionStatus() : RocketStatus {
        return this.rocketMissionStatus;
    }

    modifyRocketMissionStatus(rocketStatus: RocketStatus){
        this.rocketMissionStatus = rocketStatus;
    }
}