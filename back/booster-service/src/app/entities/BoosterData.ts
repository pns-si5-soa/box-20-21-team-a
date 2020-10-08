import BoosterStatus from './BoosterStatus';
import { setIntervalConditionPromise, setIntervalPromiseX } from '../tools/set_intervalx';
import TelemetryAPI from '../API/telemetryAPI';

export default class BoosterData
{

    private boosterStatus: BoosterStatus;
    private fuelLevel: number; //l
    private altitude: number; //km
    private speed: number; //km.s-1
    private dataUpdateDelay: number;

    private telemetryAPI: TelemetryAPI = new TelemetryAPI();

    constructor() 
    {
        this.boosterStatus = BoosterStatus.NOT_LAUNCHED;
        this.fuelLevel = 500;
        this.altitude = 0;
        this.speed = 0;
        this.dataUpdateDelay = 300;
    }

    setTimer(time: number) {
        this.dataUpdateDelay = time;
    }

    toObjectJSON() {
        return {
            boosterStatus: this.boosterStatus,
            fuelLevel: this.fuelLevel,
            altitude: this.altitude,
            speed: this.speed
        };
    }

    isDestroyed(): boolean {
        return this.boosterStatus === BoosterStatus.DESTROYED;
    }

    async launch()
    {
        /**
         *  Step 1 : Verify if the state is not launch to launch the booster
         *  Step 2 : For 10 iterations, increse altitude, speed
         *  Step 3 : At the mid-flight we land the booster while altitude is not 0
         */
        if(this.boosterStatus != BoosterStatus.NOT_LAUNCHED) throw new Error(`Cannot launch booster. Its current status is ${this.boosterStatus}`);
        console.log("Launching booster");
        this.boosterStatus = BoosterStatus.IN_FIRST_STAGE;
        this.speed = 10;
        console.log("Booster launched");
        this.telemetryAPI.setBoosterData(this);
        const that = this;
        await setIntervalPromiseX(function() {
            if(that.isDestroyed()) return;
            that.telemetryAPI.setBoosterData(that);
            console.log(that.toObjectJSON());
            console.log(that);
            that.altitude += that.speed;
            that.speed += 2;
            that.fuelLevel -= 1;
        }, this.dataUpdateDelay, 100);
        if(this.isDestroyed()) return;
        console.log("Mid-Flight");
        this.boosterStatus = BoosterStatus.IN_SECOND_STAGE;
        that.telemetryAPI.setBoosterData(that);
        console.log("Landing booster");
        await setIntervalConditionPromise(function() {
            that.telemetryAPI.setBoosterData(that);
            console.log(that.toObjectJSON());
            that.altitude -= that.speed;
            that.speed -= 2;
            that.speed = that.speed < 1 ? 1 : that.speed;
            that.fuelLevel -= 1;
        }, this.dataUpdateDelay, function() {
            return that.altitude <= 0 || that.isDestroyed();
        })
        if(this.isDestroyed()) return;
        that.telemetryAPI.setBoosterData(that);
        console.log("Booster landed");
        this.boosterStatus = BoosterStatus.LANDED;
        this.speed = 0;
        this.altitude = 0;
        that.telemetryAPI.setBoosterData(that);
        console.log("Booster stoped");
    }

    destroy(): void 
    {
        console.log("Booster destroyed");
        this.boosterStatus = BoosterStatus.DESTROYED;
    }
}