import Rocket from "../entities/Rocket";
import RocketStatus from "../entities/RocketStatus";
import RocketData from "../entities/RocketData";

class RocketController {

    rocket: Rocket;

    constructor() {
        this.rocket = new Rocket(
            new RocketData(
                RocketStatus.PREPARATION, 70, 50, 0));
    }

    // For tests only
    getStatus(): RocketStatus {
        return this.rocket.getRocketStatus();
    }

    /**
     * Puts the rocket on internal power (first action)
     */
    putRocketOnInternalPower() {
        this.rocket.putRocketOnInternalPower();
    }

    /**
     * Initializes the startup process before launch (second action).
     * Goes through those states :
     * - STARTUP
     * - MAIN_ENGINE_STARTED
     */
    async initializeStartupProcess() {
        await this.rocket.initializeStartupProcess();
    }

    /**
     * Method called by booster after it has been launched. (Third action)
     * The rocket goes through those states after this call :
     * - LAUNCHED
     * - MAX_Q_REACHED
     */
    async notifyOfBoosterLaunch(): Promise<void> {
        await this.rocket.notifyOfBoosterLaunch();
    }

    /**
     * Method called by the booster when it has no more fuel. (Forth action)
     * The rocket goes through thoses states after this call :
     * - MAIN_ENGINE_CUT_OFF
     * - BOOSTER_DETACHED
     * - SECOND_ENGINE_START
     * - FAIRING_SEPARATION
     * - SECOND_ENGINE_CUT_OFF
     */
    async initializeSecondEngineForSecondStage(): Promise<void> {
        await this.rocket.initializeSecondEngineForSecondStage();
    }

    /**
     * Destroys rocket.
     */
    destroy(): void {
        this.rocket.destroy();
    }

}

export default new RocketController();