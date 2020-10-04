

class TelemetryData {


    private rocketStatus : string;
    private fuelLevel : number;     // from 0 to 10



    constructor(
        rocketStatus  = "Not Ready",
        fuelLevel = -1,
    ) {
        this.rocketStatus=rocketStatus;
        this.fuelLevel=fuelLevel;
    }

    getRocketStatus() {
        return this.rocketStatus;
    }

    setRocketStatus(value: string) {
        this.rocketStatus = value;
    }

    getFuelLevel(): number {
        return this.fuelLevel;
    }

    setFuelLevel(value: number) {
        this.fuelLevel = value;
    }
}


export default TelemetryData