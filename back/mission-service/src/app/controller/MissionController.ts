import Poll from '../entities/poll';
import Mission from "../entities/Mission";
import BoosterStatus from "../entities/Booster/BoosterStatus";
import RocketStatus from "../entities/Rocket/RocketStatus";
import BoosterDataMission from "../entities/Booster/BoosterDataMission";
import RocketDataMission from "../entities/Rocket/RocketDataMission";
import Producer from '../producer/producer';
import MissionsCoordinatorAPI from '../API/missionsCoordinatorAPI';

const MISSIONS_COORDINATOR_API: MissionsCoordinatorAPI = new MissionsCoordinatorAPI();

class MissionController {

    
    missions : Mission[]
    producerKafka : Producer;


    constructor() {
        this.missions= [];
        this.producerKafka = new Producer();
    }

    async createPoll(id :number) {
        return await MISSIONS_COORDINATOR_API.createMission().then((res) =>{
console.log(res.data.missionId);
            this.missions[res.data.missionId] = new Mission();
            return this.missions[res.data.missionId].createPoll()
        }).catch((err)=>{
            console.error(err);
        });
        
    }

    getPoll(id :number): Poll {
        return this.missions[id].getPoll();
    }

    async modifyPoll(serviceName: string, answer: boolean,id:number): Promise<Poll> {
        console.log(id);
        console.log(this.missions[id]);
        console.log(this.missions[id+1]);
        console.log(this.missions);
        return this.missions[id].modifyPoll(serviceName, answer);
    }

    getRocket(id:number) : boolean {
        return this.missions[id].getPoll().getRocketResponse();
    }

    getWeather(id:number) : boolean {
        return this.missions[id].getPoll().getWeatherResponse();
    }

    getMissionStatusForBooster(id:number) : BoosterStatus {
        return this.missions[id].getBoosterMissionStatus();
    }
   
    async modifyMissionStatusForBooster(boosterData : BoosterDataMission) {
        await this.producerKafka.sendMissionStatus(boosterData,'booster-topic');
        const booster = Object.assign(new BoosterDataMission(boosterData.missionId), boosterData);
        console.log(booster)
        booster.save()
        return booster;
    }

    getMissionStatusForRocket(id:number) : RocketStatus {
        return this.missions[id].getRocketMissionStatus();
    }

    async modifyMissionStatusForRocket(rocketStatus : RocketDataMission) {
        await this.producerKafka.sendMissionStatus(rocketStatus,'rocket-topic');
        const rocket = Object.assign(new RocketDataMission(rocketStatus.missionId), rocketStatus);
        console.log(rocket)
        rocket.save()
        return rocket;
    }
}

export default new MissionController();
