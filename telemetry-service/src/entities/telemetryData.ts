

class TelemetryData {


    private rocketStatus : boolean;
    private fuelLevel : number;     // from 0 to 10
    private windSpeed : number;     // speed in km/h


    constructor(
        rocketStatus : boolean = false,
        fuelLevel : number = -1,
        windSpeed : number = -1
    ) {
        this.rocketStatus=rocketStatus;
        this.fuelLevel=fuelLevel;
        this.windSpeed=windSpeed;
    }

    getRocketStatus(): boolean {
        return this.rocketStatus;
    }

    setRocketStatus(value: boolean) {
        this.rocketStatus = value;
    }

    getFuelLevel(): number {
        return this.fuelLevel;
    }

    setFuelLevel(value: number) {
        this.fuelLevel = value;
    }

    getWindSpeed(): number {
        return this.windSpeed;
    }

    setWindSpeed(value: number) {
        this.windSpeed = value;
    }

}


export default TelemetryData