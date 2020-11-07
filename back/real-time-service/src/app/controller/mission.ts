import MissionStatus from "../entities/missionStatus";

interface IMissions{
    [id : string] : MissionStatus
}
class Mission {
    missions : IMissions;
    
    constructor() {
        this.missions = {}

    }

    addNewMission(missionId :string) : string{
        let missionStatus = new MissionStatus();
           this.missions[missionId] = missionStatus;
        return missionId; 
    }

    getStatus(id : string) {
        if(this.missions[id] == undefined){ 
            console.log("undefined - - - - - - - - -");
        }
        return this.missions[id] == undefined? null :this.missions[id].toObjectJSON();
    }

    updateStatusBoosterInRealTime(status: any,id:string) {
        this.missions[id].boosterStatus = status;
    }
    updateStatusRocketInRealTime(status: any,id:string) {
        this.missions[id].rocketStatus = status;
    }
}

export default new Mission();