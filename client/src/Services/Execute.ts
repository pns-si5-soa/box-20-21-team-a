import MissionAPI from '../API/missionAPI'
import RocketAPI from '../API/rocketAPI'
import WeatherAPI from '../API/weatherAPI'
import Poll from "../model/Poll"
import TelemetryAPI from "../API/telemetryAPI";

const missionAPI = new MissionAPI();
const rocketAPI = new RocketAPI();
const weatherAPI = new WeatherAPI();
const telemetryAPI = new TelemetryAPI();

class Execute
{
    service: string|undefined;
    service_action: string|undefined;
    service_name : string|undefined;
    vote : string|undefined;
    data : string |undefined;

    execute() 
    {
        switch(this.service)
        {
            case "weather": // TODO all those strings must be in constants
                this.executeWeatherCommand();
                break;
            case "rocket":
                this.executeRocketCommand();
                break;
            case "mission":
                this.executeMissionCommand();
                break;
            case "telemetry":
                this.executeTelemetry();
                break;
            default:
                console.log("Undefined service : " + this.service)
                break;
        }
    }

    executeWeatherCommand()
    {
        switch(this.service_action)
        {
            case "get":
                weatherAPI.getWeather().then(res => {
                    console.log(res.data);
                });
                break;
            default:
                console.log("Weather undefined action : " + this.service_action);
                break;
        }
    }

    executeRocketCommand()
    {
        switch(this.service_action)
        {
            case "get":
                rocketAPI.getRocketStatus().then(res => {
                    console.log(res.data);
                });
                break;
            case "run":
                rocketAPI.launchRocket().then(res => {
                    console.log(res.data);
                })
                break;
            default: 
                console.log("Rocket undefined action : " + this.service_action);
                break;
        }
    }

    executeMissionCommand()
    {
        switch(this.service_action)
        {
            case "create":
                missionAPI.createPoll().then(res => {
                    console.log(this.printPoll(res.data));
                });
                break;
            case "put":
                    if (typeof this.service_name === "string" && typeof this.vote === "string") {
                        missionAPI.modifyPoll(this.service_name, this.vote).then(res => {
                            console.log(this.printPoll(res.data));
                        });
                    } else {
                        console.log("Parameters are required , Example : --service_name weather --vote true");
                    }
                    break;
            case "get":
                missionAPI.getPoll().then(res => {
                    console.log(this.printPoll(res.data.toString()));
                });
                break;

            default: 
                console.log("Mission undefined action : " + this.service_action);
                break;
        }
    }

    printPoll(data : Poll){
        return "Answers : \n WeatherStatus : "+data.weatherStatus+"\n RocketStatus : "+data.rocketStatus+"\n MissionStatus : "+data.missionStatus;
    }

    private executeTelemetry() {
        switch(this.data){
            case "all":
                telemetryAPI.getData().then(res => {
                    console.log(res.data);
                })
                break;
            case "rocketstatus":
                telemetryAPI.getRocketStatus().then(res => {
                    console.log(res.data);
                })
                break;
        }

    }
}

export default new Execute()