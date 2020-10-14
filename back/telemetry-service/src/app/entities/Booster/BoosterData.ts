import {BoosterStatus} from "./BoosterStatus";
import {insertOne, removeOne, find, update} from "../../db/Mongo"

interface IBoosterData{
    boosterData: {
        boosterStatus: BoosterStatus,
        altitude: number,
        speed: number,
        fuelLevel: number,
    }
}

class BoosterData {
    private boosterStatus : BoosterStatus;
    private altitude: number;
    private speed: number;
    private fuelLevel: number;
    private id: number = -1;


    constructor(altitude=-1, speed=-1,fuelLevel=-1, boosterStatus=BoosterStatus.NOT_LAUNCHED) {
        this.altitude=altitude;
        this.speed=speed;
        this.fuelLevel=fuelLevel;
        this.boosterStatus=boosterStatus;
        this.create()
    }


    getFuelLevel(): number {
        return this.fuelLevel;
    }

    setFuelLevel(value: number) {
        this.fuelLevel = value;
        this.update({fuelLevel: this.fuelLevel})
    }

    setAltitude(value : number){
        this.altitude=value;
        this.update({altitude: this.altitude})
    }

    setSpeed(value : number){
        this.speed=value;
        this.update({speed: this.speed})
    }


    getAltitude(){
        return this.altitude;
    }

    getSpeed(){
        return this.speed;
    }


    getBoosterStatus() {
        return this.boosterStatus;
    }

    setBoosterStatus(value: BoosterStatus) {
        this.boosterStatus = value;
        this.update({boosterStatus: this.boosterStatus})
    }

    toObjectJSON(): IBoosterData {
        return {
            boosterData: {
                boosterStatus: this.boosterStatus,
                fuelLevel: this.fuelLevel,
                altitude: this.altitude,
                speed: this.speed,
            }
        };
    }

    create() {
        insertOne("boosterData", this).then(res => {
            this.id = res.insertedIds
        }).catch(err => {
            console.log(err)
        })
    }

    update(set: any = null) {
        if(set === null) {
            set = {
                boosterStatus: this.boosterStatus,
                altitude: this.altitude,
                speed: this.speed,
                fuelLevel: this.fuelLevel,
            }
        }
        update("boosterData", set, {id: this.id}).catch(err => {
            console.error(err)
        })
    }

    delete() {
        if(this.id == -1) throw new Error("Impossible to remove because is not in db")
        removeOne("boosterData", {id: this.id}).catch(err => {
            console.error(err)
        })
    }

    static find(id: number) : Promise<BoosterData> {
        return new Promise((resolve, reject) => {
            find<BoosterData>("boosterData", {id: id}).then(res => {
                resolve(res[0])
            }).catch(err => {
                reject(err)
            })
        })
    }
}
//ops.insertedIds:
export default BoosterData