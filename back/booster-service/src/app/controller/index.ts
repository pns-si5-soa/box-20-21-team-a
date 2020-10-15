import Booster from "../entities/Booster";
import {BoosterStatus} from "../entities/BoosterStatus";
import BoosterData from "../entities/BoosterData";

class BoosterController {

    Booster: Booster;

    constructor() {
        this.Booster = new Booster(
            new BoosterData(
                BoosterStatus.NOT_LAUNCHED, 30, 0, 0, 0));
    }

    // For tests only
    getStatus(): BoosterStatus {
        return this.Booster.getBoosterData().boosterStatus;
    }

    async launch(): Promise<void> {
        await this.Booster.launch();
    }

    destroy(): void {
        this.Booster.destroy();
    }
}

export default new BoosterController();