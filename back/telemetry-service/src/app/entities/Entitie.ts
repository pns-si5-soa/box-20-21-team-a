import {insertOne, removeOne, update, find} from "../db/Mongo"

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
        update(this.constructor.name, this.toObjectJSON(), {id: this.id}).catch(err => {
            console.error(err)
        })
    }

    findIdAndAssign<T>(id: number) {
        const that = this;
        return new Promise((resolve, reject) => {
            find<T>(this.constructor.name, {id: id}).then(res => {
                if(res === undefined) reject(that.constructor.name + " has not object with id " + id)
                that.assign(res[0])
                resolve(that)
            }).catch(err => reject(err))
        }) 
    }

    findFirstAndAssign<T>() {
        return new Promise((resolve, reject) => {
            find<T>(this.constructor.name, {}, {_id: 1}).then(res => {
                if(res === undefined || res.length === 0 ) reject(this.constructor.name + " has not object")
                this.assign(res[0])
                resolve(this)
            }).catch(err => reject(err))
        })
    }

    findLastAndAssign<T>() {
        return new Promise((resolve, reject) => {
            find<T>(this.constructor.name, {}, {_id: -1}).then(res => {
                if(res === undefined || res.length === 0 ) reject(this.constructor.name + " has not object")
                this.assign(res[0])
                resolve(this)
            }).catch(err => reject(err))
        })
    }

    abstract toObjectJSON() : Object;
    abstract assign(other: any) : void;
}

export default Entitie;