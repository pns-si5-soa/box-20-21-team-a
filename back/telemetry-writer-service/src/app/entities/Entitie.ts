import {find, insertOne, removeOne, update} from "../db/Mongo"

abstract class Entitie {

    protected id: number;

    constructor() {
        this.id = -1;
    }

    save() {
        insertOne(this.constructor.name, this.toObjectJSON()).then(res => {
            this.id = res.insertedIds
        }).catch(err => {
            console.log(err)
        })
    }

    delete() {
        if(this.id == -1) throw new Error("Impossible to remove because is not in db")
        removeOne(this.constructor.name, {id: this.id}).catch(err => {
            console.error(err)
        })
    }

    update() {
        if(this.id == -1) throw new Error("Impossible to remove because is not in db")
        update(this.constructor.name, this.toObjectJSON(), {id: this.id}).catch(err => {
            console.error(err)
        })
    }

    findIdAndAssign<T extends Entitie>(id: number) : Promise<Entitie> {
        return new Promise((resolve, reject) => {
            find<T>(this.constructor.name, {id: id}).then(res => {
                if(res === undefined) reject(this.constructor.name + " has not object with id " + id)
                this.assign(res[0])
                resolve(this)
            }).catch(err => reject(err))
        }) 
    }

    findFirstAndAssign<T extends Entitie>(filter: Object = {}) : Promise<Entitie> {
        return new Promise((resolve, reject) => {
            find<T>(this.constructor.name, filter, {_id: 1}).then(res => {
                if(res === undefined || res.length === 0 ) reject(this.constructor.name + " has not object")
                this.assign(res[0])
                resolve(this)
            }).catch(err => reject(err))
        })
    }

    findLastAndAssign<T extends Entitie>(filter: Object = {}) : Promise<Entitie> {
        return new Promise((resolve, reject) => {
            find<T>(this.constructor.name, filter, {_id: -1}).then(res => {
                if(res === undefined || res.length === 0 ) reject(this.constructor.name + " has not object")
                this.assign(res[0])
                resolve(this)
            }).catch(err => reject(err))
        })
    }

    //Serialize to database
    abstract toObjectJSON() : Object;
    //Unserialise from database
    abstract assign(other: any) : void;
}

export default Entitie;