import MissionAPI from '../API/missionAPI'
import RocketAPI from '../API/rocketAPI'
import WeatherAPI from '../API/weatherAPI'
import TelemetryAPI from "../API/telemetryAPI";

const missionAPI = new MissionAPI();
const rocketAPI = new RocketAPI();
const weatherAPI = new WeatherAPI();
const telemetryAPI = new TelemetryAPI();

class Execute
{
    execute(service: string, service_action: string, service_name: string|undefined = undefined, vote: string|undefined = undefined) 
    {
        switch(service)
        {
            case "weather": // TODO all those strings must be in constants
                return this.executeWeatherCommand(service_action);
            case "rocket":
                return this.executeRocketCommand(service_action);
            case "mission":
                return this.executeMissionCommand(service_action, service_name, vote);
            case "telemetry":
                return this.executeTelemetryCommand(service_action);
            default:
                console.log("Undefined service : " + service)
                break;
        }
    }

    executeWeatherCommand(service_action: string)
    {
        switch(service_action)
        {
            case "get":
                return weatherAPI.getWeather()
            default:
                console.log("Weather undefined action : " + service_action);
                break;
        }
    }

    executeRocketCommand(service_action: string)
    {
        switch(service_action)
        {
            case "get":
                return rocketAPI.getRocketStatus();  // TODO remove this call @Thomas
            case "run":
                return rocketAPI.launchRocket()
            default: 
                console.log("Rocket undefined action : " + service_action);
                break;
        }
    }

    executeMissionCommand(service_action: string, service_name: string|undefined, vote: string|undefined)
    {
        switch(service_action)
        {
            case "create":
                return missionAPI.createPoll()
            case "put":
                    if (typeof service_name === "string" && typeof vote === "string") {
                        return missionAPI.modifyPoll(service_name, vote)
                    } else {
                        console.log("Parameters are required , Example : --service_name weather --vote true");
                        return;
                    }
            case "get":
                return missionAPI.getPoll();
            default: 
                console.log("Mission undefined action : " + service_action);
                break;
        }
    }

    executeTelemetryCommand(data: string) {
        switch(data){
            case "get":
                return telemetryAPI.getData();
            case "rocketstatus":
                return telemetryAPI.getRocketStatus();
            default:
                console.log("Telemetry action undefined" + data);
                break;
        }

    }
}

export default new Execute()