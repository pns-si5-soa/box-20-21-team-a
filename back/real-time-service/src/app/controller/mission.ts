class Mission {
    status: String;

    constructor() {
        this.status = "undefined"
    }

    getStatus() {
        return this.status;
    }

    updateStatusInRealTime(status: any) {
        this.status = status;
    }
}

export default new Mission();