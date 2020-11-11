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
        console.log("Creating mission : " + missionNumber)
        console.log("Initialize HeadStages...")
        HEAD_STAGES_API.createHeadStage(missionNumber).then((res)=>{
            console.log("Head Stage initialized")
        })

        console.log("Initialize Payload...")
        PAYLOADS_API.createPayload(missionNumber).then((res)=>{
            console.log("Payload initialized")
        })

        console.log("Initialize Booster...")
        BOOSTERS_API.createBooster(missionNumber).then(res => {
            console.log("Booster initialized")
        })

        console.log("Initialize RealTime...")
        REAL_TIME_API.createMission(missionNumber).then(res => {
            console.log("RealTime initialized")
        })

        console.log("Initialize Mission...")
        MISSION_API.createMission(missionNumber).then(res => {
            console.log("Mission initialized")
        })

        console.log("Initialize Poll...")
        POLL_API.createPoll(missionNumber).then(res => {
            console.log("Poll initialized")
        })

        this.missions.push(missionNumber);
        return missionNumber;
        
    }

    missionExists(id:string) : boolean{
        return this.missions.filter(element => element.id === id).length > 0;
        
    }
    listMissions() : IMission[]{
        return this.missions;
    }

    

    
}

export default new MissionsCoordinationController();
