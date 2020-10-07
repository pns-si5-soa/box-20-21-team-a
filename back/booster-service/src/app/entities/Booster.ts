import BoosterStatus from './BoosterStatus'
import { setIntervalConditionPromise, setIntervalPromiseX } from '../tools/set_intervalx'

export default class Booster 
{

    private boosterStatus: BoosterStatus
    private fuelLevel: number; //l
    private altitude: number; //km
    private speed: number //km.s-1

    constructor() 
    {
        this.boosterStatus = BoosterStatus.NOT_LAUNCHED;
        this.fuelLevel = 50;
        this.altitude = 0;
        this.speed = 0;
    }

    toObjectJSON() {
        return {
            boosterStatus: this.boosterStatus.toString(),
            fuelLevel: this.fuelLevel,
            altitude: this.altitude,
            speed: this.altitude
        }
    }

    verifyStatus(): Boolean {
        return this.boosterStatus == BoosterStatus.DESTROYED;
    }

    async launch()
    {
        /**
         *  Step 1 : Verify if the state is not launch to launch the booster
         *  Step 2 : For 10 iterations, increse altitude, speed
         *  Step 3 : At the mid-flight we land the booster while altitude is not 0
         */
        if(this.boosterStatus != BoosterStatus.NOT_LAUNCHED) throw new Error("Cannot launch booster");
        console.log("Launching booster")
        this.boosterStatus = BoosterStatus.IN_FIRST_STAGE;
        this.speed = 10;
        console.log("Booster launched")
        const that = this;
        await setIntervalPromiseX(function() {
            if(that.verifyStatus()) return;
            console.log(that.toObjectJSON())
            console.log(that)
            that.altitude += that.speed
            that.speed += 2
            that.fuelLevel -= 1;
        }, 1000, 100);
        if(this.verifyStatus()) return;
        console.log("Mid-Flight")
        this.boosterStatus = BoosterStatus.IN_SECOND_STAGE;
        console.log("Landing booster")
        await setIntervalConditionPromise(function() {
            console.log(that.toObjectJSON())
            that.altitude -= that.speed;
            that.speed -= 2;
            that.speed = that.speed < 1 ? 1 : that.speed;
            that.fuelLevel -= 1;
        }, 1000, function() {
            return that.altitude <= 0 || that.verifyStatus()
        })
        if(this.verifyStatus()) return;
        console.log("Booster landed")
        this.boosterStatus = BoosterStatus.LANDED;
        this.speed = 0;
        this.altitude = 0;
        console.log("Booster stoped")
    }

    destroy(): void 
    {
        console.log("Booster destroyed")
        this.boosterStatus = BoosterStatus.DESTROYED
    }
}