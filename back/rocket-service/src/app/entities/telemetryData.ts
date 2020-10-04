

class TelemetryData {


    private rocketStatus : boolean;
    private fuelLevel : number;     // from 0 to 10



    constructor(
        rocketStatus  = false,
        fuelLevel = -1,
    ) {
        this.rocketStatus=rocketStatus;
        this.fuelLevel=fuelLevel;
    }

    getRocketStatus() {
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
}


export default TelemetryData