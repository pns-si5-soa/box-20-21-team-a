import BoostersAPI from "../API/boostersAPI";
import HeadStagesAPI from "../API/headStagesAPI";
import PayloadAPI from "../API/payloadsAPI";
import RealTimeAPI from "../API/realTimeAPI";


const HEAD_STAGES_API: HeadStagesAPI = new HeadStagesAPI();
const PAYLOADS_API: PayloadAPI = new PayloadAPI();
const BOOSTERS_API: BoostersAPI = new BoostersAPI();
const REAL_TIME_API: RealTimeAPI = new RealTimeAPI();


interface IMission{
    id : number
}

class MissionsCoordinationController {

     missionsNumber : number;
     missions : number[]; // create an empty array

    
    constructor() {
        this.missionsNumber = 1;
        this.missions = [];
    }

    createNewMission() : number{
        HEAD_STAGES_API.createHeadStage(this.missionsNumber).then((res)=>{
            console.log(res.data);
        }).catch((error)=>{console.error(error)});
        PAYLOADS_API.createPayload(this.missionsNumber).then((res)=>{
            console.log(res.data);
        }).catch((error)=>{console.error(error)});
        BOOSTERS_API.createBooster(this.missionsNumber).catch((error)=>{console.error(error)});
        REAL_TIME_API.createMission(this.missionsNumber).catch((error)=>{console.error(error)});
        this.missions.push(this.missionsNumber);
        this.missionsNumber ++;
        return this.missionsNumber-1;
        
    }

    missionExists(id:number) : boolean{
        return this.missions.indexOf(id) >= 0;
    }
    listMissions() : IMission[]{
        return this.missions.map((mission)=>{return {id : mission}});
    }

    

    
}

export default new MissionsCoordinationController();
