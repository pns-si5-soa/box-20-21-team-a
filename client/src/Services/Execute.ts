import MissionAPI from '../API/missionAPI'
import RocketAPI from '../API/rocketAPI'
import WeatherAPI from '../API/weatherAPI'

const missionAPI = new MissionAPI()
const rocketAPI = new RocketAPI()
const weatherAPI = new WeatherAPI()

class Execute
{
    service: String|undefined
    service_action: String|undefined
    parameter_1 : String|undefined
    parameter_2 : String|undefined

    execute() 
    {

        switch(this.service)
        {
            case "weather":
                this.weather()
                break;
            case "rocket":
                this.rocket()
                break;
            case "mission":
                this.mission()
                break;
            default:
                console.log("Undefined service : " + this.service)
                break;
        }
    }

    weather() 
    {
        switch(this.service_action)
        {
            case "get":
                weatherAPI.getWeather().then(res => {
                    console.log(res.data)
                })
                break;
            default:
                console.log("Weather undefined action : " + this.service_action)
                break;
        }
    }

    rocket() 
    {
        switch(this.service_action)
        {
            case "get":
                rocketAPI.getRocketStatus().then(res => {
                    console.log(res.data)
                })
                break;
            case "run":
                rocketAPI.launchRocket().then(res => {
                    console.log(res.data)
                })
                break;
            default: 
                console.log("Rocket undefined action : " + this.service_action)
                break;
        }
    }

    mission() 
    {
        switch(this.service_action)
        {
            case "create":
                missionAPI.createPoll().then(res => {
                    console.log("The poll has been created\nAswers : \n"+res.data.toString())
                })
                break;
            case "put":
                    if (typeof this.parameter_2 === "string" && typeof this.parameter_1 === "string") {
                        missionAPI.modifyPoll(this.parameter_1, this.parameter_2).then(res => {
                            console.log("Aswers : \n" + res.data.toString())
                        })
                    } else {
                        console.log("Parameters are required , Exemple : -p1 weather -p true");
                    }
                    break;
            default: 
                console.log("Mission undefined action : " + this.service_action)
                break;
        }
    }
}

export default new Execute()