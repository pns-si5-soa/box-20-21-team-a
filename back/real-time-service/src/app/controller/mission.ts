import MissionStatus from "../entities/missionStatus";

class Mission {
    missions : MissionStatus[];
    

    

    constructor() {
        this.missions = []

    }

    addNewMission(missionId :number) : number{
        let missionStatus = new MissionStatus();
           this.missions[missionId] = missionStatus;
        return missionId; 
    }

    getStatus(id : number) {
        return this.missions[id].toObjectJSON();
    }

    updateStatusBoosterInRealTime(status: any,id:number) {
        this.missions[id].boosterStatus = status;
    }
    updateStatusRocketInRealTime(status: any,id:number) {
        this.missions[id].rocketStatus = status;
    }
}

export default new Mission();