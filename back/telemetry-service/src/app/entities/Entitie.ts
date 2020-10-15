import {insertOne, removeOne, update} from "../db/Mongo"

abstract class Entitie {

    private id: number;

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

    abstract toObjectJSON() : Object;
}

export default Entitie;