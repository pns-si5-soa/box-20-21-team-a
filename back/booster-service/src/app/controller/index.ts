import Booster from "../entities/Booster";
import BoosterStatus from "../entities/BoosterStatus";
import BoosterData from "../entities/BoosterData";
import MissionAPI from "../API/MissionAPI";

class BoosterController {

    MissionAPI = new MissionAPI();
    boosters : Booster[];

    constructor() {
        this.boosters  = []
    }

    addNewBooster(boosterId :number) : number{
        let booster = new Booster(
            new BoosterData(boosterId,
                BoosterStatus.ON_THE_ROCKET, 30, 0, 0, 0));
           this.boosters[boosterId] = booster;
        return boosterId; 
    }

    // For tests only
    getStatus(id:number): BoosterStatus {
        return this.boosters[id].getBoosterData().boosterStatus;
    }

    async launch(id:number): Promise<void> {
        await this.boosters[id].launch();
    }

    async destroy(id:number) {
        this.boosters[id].destroy();
    }
}

export default new BoosterController();