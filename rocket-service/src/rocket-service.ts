class rocketService{

    rocket_status = ["Ready", "Not ready"]
    launched = false;

    getStatus(): String {
        return this.rocket_status[Math.floor(Math.random() * this.rocket_status.length)]
    }

    launch(): String {
        this.launched = true;
        return "Launching Rocket...";
    }

}


export default new rocketService();