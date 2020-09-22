class rocketService{

    rocket_status = ["ready", "not ready"]
    launched = false;

    getStatus(): String {
        return this.rocket_status[Math.floor(Math.random() * Math.floor(this.rocket_status.length))]
    }

    launch(): String {
        this.launched = true;
        return "Launching ...";
    }

}


export default new rocketService();