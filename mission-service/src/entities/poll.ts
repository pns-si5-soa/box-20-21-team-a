
// TODO the file should have a capital first letter
class Poll {

    weatherStatus: boolean; // todo this could be an object of its own (with a name and a status)
    rocketStatus: boolean;
    missionStatus: boolean;


    constructor(
        weatherStatus: boolean = false,
        rocketStatus: boolean = false,
        missionStatus: boolean = false) {
        this.weatherStatus = weatherStatus;
        this.rocketStatus = rocketStatus;
        this.missionStatus = missionStatus;
    }

    getRocketStatus() {
        return this.rocketStatus;
    }

    getWeatherStatus() {
        return this.weatherStatus;
    }

    setWeatherStatus(weatherStatus: boolean) {
        this.weatherStatus = weatherStatus;
    }

    setRocketStatus(rocketStatus: boolean) {
        this.rocketStatus = rocketStatus;
    }

    setMissionStatus(missionStatus: boolean) {
        this.missionStatus = missionStatus;
    }

    toString() {
        return `Weather: ${this.weatherStatus}\nRocket: ${this.rocketStatus}\nMission: ${this.missionStatus}`;
    }
}

export default Poll;