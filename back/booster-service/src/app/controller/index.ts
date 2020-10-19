import Booster from "../entities/Booster";
import BoosterStatus from "../entities/BoosterStatus";
import BoosterData from "../entities/BoosterData";
import MissionAPI from "../API/MissionAPI";

class BoosterController {

    MissionAPI = new MissionAPI();
    Booster: Booster;

    constructor() {
        this.Booster = new Booster(
            new BoosterData(
                BoosterStatus.ON_THE_ROCKET, 30, 0, 0, 0));
    }

    // For tests only
    getStatus(): BoosterStatus {
        return this.Booster.getBoosterData().boosterStatus;
    }

    async launch(): Promise<void> {
        await this.Booster.launch();
    }

    async destroy() {
        this.Booster.destroy();
    }
}

export default new BoosterController();