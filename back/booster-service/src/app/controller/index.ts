import Booster from "../entities/Booster";
import BoosterStatus from "../entities/BoosterStatus";
import BoosterData from "../entities/BoosterData";
import MissionAPI from "../API/MissionAPI";


interface IBoosters{
    [id : string] : Booster
}
class BoosterController {

    MissionAPI = new MissionAPI();
    boosters : IBoosters;

    constructor() {
        this.boosters  = {}
    }

    addNewBooster(boosterId :string) : string{
        let booster = new Booster(
            new BoosterData(boosterId,
                BoosterStatus.ON_THE_ROCKET, 30, 0, 0, 0));
           this.boosters[boosterId] = booster;
        return boosterId; 
    }

    // For tests only
    getStatus(id:string): BoosterStatus {
        return this.boosters[id].getBoosterData().boosterStatus;
    }

    async launch(id:string): Promise<void> {
        await this.boosters[id].launch();
    }

    async destroy(id:string) {
        this.boosters[id].destroy();
    }

    drainBooster(id:string) {
        this.boosters[id].drainBooster();
        console.log("drain booster : "+id);
    }
}

export default new BoosterController();