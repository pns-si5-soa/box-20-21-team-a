class Mission {
    boosterStatus: any;
    rocketStatus: any;

    

    constructor() {
        this.boosterStatus = 0
        this.rocketStatus = 0

    }

    getStatus() {
        return {
            rocket : this.rocketStatus,
            booster : this.boosterStatus
        }
    }

    updateStatusBoosterInRealTime(status: any) {
        this.boosterStatus = status;
    }
    updateStatusRocketInRealTime(status: any) {
        this.rocketStatus = status;
    }
}

export default new Mission();