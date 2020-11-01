import BoostersAPI from "../API/boostersAPI";
import HeadStagesAPI from "../API/headStagesAPI";
import MissionAPI from "../API/missionAPI";
import PayloadAPI from "../API/payloadsAPI";
import RealTimeAPI from "../API/realTimeAPI";
import PollAPI from "../API/pollAPI";



const HEAD_STAGES_API: HeadStagesAPI = new HeadStagesAPI();
const PAYLOADS_API: PayloadAPI = new PayloadAPI();
const BOOSTERS_API: BoostersAPI = new BoostersAPI();
const REAL_TIME_API: RealTimeAPI = new RealTimeAPI();
const MISSION_API: MissionAPI = new MissionAPI();
const POLL_API: PollAPI = new PollAPI();

const { v4: uuidv4 } = require('uuid');


interface IMission{
    id : string
}

class MissionsCoordinationController {

    
     missions : IMission[]; // create an empty array

    
    constructor() {
        this.missions = [];
    }

    createNewMission() : number{
        // TODO : This method is just going to produce an event in kafka 
        var missionNumber = uuidv4(); 
        HEAD_STAGES_API.createHeadStage(missionNumber).then((res)=>{
            console.log(res.data);
        }).catch((error)=>{console.error(error)});
        PAYLOADS_API.createPayload(missionNumber).then((res)=>{
            console.log(res.data);
        }).catch((error)=>{console.error(error)});
        BOOSTERS_API.createBooster(missionNumber).catch((error)=>{console.error(error)});
        REAL_TIME_API.createMission(missionNumber).then(res => {
            console.log("realtime")
            console.log(res.data)
        }).catch((error)=>{console.error(error)});
        MISSION_API.createMission(missionNumber).catch((error)=>{console.error(error)});
        POLL_API.createPoll(missionNumber).catch((error)=>{console.error(error)});
        this.missions.push(missionNumber);
        return missionNumber;
        
    }

    missionExists(id:string) : boolean{
        return this.missions.filter(element => element.id === id).length > 0;
        
    }
    listMissions() : IMission[]{
        console.log(this.missions);
        return this.missions;
    }

    

    
}

export default new MissionsCoordinationController();
