export default class MissionStatus{

    boosterStatus: any;
    rocketStatus: any;

    constructor(){
        this.boosterStatus = 0;
        this.rocketStatus = 0;
    }

    toObjectJSON(){
        return{
            rocket : this.rocketStatus,
            booster : this.boosterStatus
        }
    }
}