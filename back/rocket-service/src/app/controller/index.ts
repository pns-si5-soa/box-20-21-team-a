import Rocket from "../entities/Rocket";
import RocketStatus from "../entities/RocketStatus";
import RocketData from "../entities/RocketData";

interface IRockets{
    [id : string] : Rocket
}
class RocketController {

    rockets : IRockets;

    constructor() {
        this.rockets = {};
    }



    addNewRocket(rocketId :string) : string{
        console.log(rocketId);
        let rocket = new Rocket(
            new RocketData(rocketId,
                RocketStatus.PREPARATION, 70, 50, 0)); 
           this.rockets[rocketId] = rocket;
        return rocketId;
        
    }

    // For tests only
    getStatus(id : string): RocketStatus {
        return this.rockets[id].getRocketStatus();
    
    }

    /**
     * Puts the rocket on internal power (first action)
     */
    putRocketOnInternalPower(id : string) {
        
        if(this.rockets[id] != null)
            this.rockets[id].putRocketOnInternalPower();
    }

    /**
     * Initializes the startup process before launch (second action).
     * Goes through those states :
     * - STARTUP
     * - MAIN_ENGINE_STARTED
     */
    async initializeStartupProcess(id:string) {
        await this.rockets[id].initializeStartupProcess();
    }

    /**
     * Method called by booster after it has been launched. (Third action)
     * The rocket goes through those states after this call :
     * - LAUNCHED
     * - MAX_Q_REACHED
     */
    async notifyOfBoosterLaunch(id:string): Promise<void> {
        await this.rockets[id].notifyOfBoosterLaunch();
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
    async initializeSecondEngineForSecondStage(id : string): Promise<void> {
        await this.rockets[id].initializeSecondEngineForSecondStage();
    }

    /**
     * Destroys rocket.
     */
    destroy(id:string): void {
        this.rockets[id].destroy();
    }

    drainRocket(id : string) {
        this.rockets[id].drainRocket();
    }

    makeRocketFall(id: string) {
        this.rockets[id].makeRocketFall();
    }
}

export default new RocketController();