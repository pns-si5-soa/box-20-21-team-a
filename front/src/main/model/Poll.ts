

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

    getRocketStatus(): boolean {
        return this.rocketStatus;
    }

    getWeatherStatus(): boolean {
        return this.weatherStatus;
    }

    getMissionStatus(): boolean {
        return this.missionStatus;
    }

    setWeatherStatus(weatherStatus: boolean): void {
        this.weatherStatus = weatherStatus;
    }

    setRocketStatus(rocketStatus: boolean): void {
        this.rocketStatus = rocketStatus;
    }

    setMissionStatus(missionStatus: boolean): void {
        this.missionStatus = missionStatus;
    }
}

export default Poll