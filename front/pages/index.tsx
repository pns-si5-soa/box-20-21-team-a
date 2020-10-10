import React from 'react';

import Button from '@material-ui/core/Button';
import View from '../components/View';
import "./index.scss";
import Poll from '../src/main/model/Poll';

import RocketMonitor from "../components/rocketMonitor";
import WeatherAPI from '../src/main/API/weatherAPI';
import MissionAPI from '../src/main/API/missionAPI';
import BoosterAPI from '../src/main/API/boosterAPI';
import RocketData from "../src/main/model/Rocket/RocketData";
import BoosterData from "../src/main/model/Booster/BoosterData";
import PayloadData from "../src/main/model/Payload/PayloadData";
import TelemetryMonitor from "../components/telemetryMonitor";

type Props = {};

class Home extends React.Component<{}, { weather: string, poll: Poll | undefined, rocketData: RocketData| undefined,boosterData: BoosterData| undefined,payloadData: PayloadData| undefined, launch: string }> {

    weatherAPI: WeatherAPI;
    missionAPI: MissionAPI;
    boosterAPI: BoosterAPI;

    constructor(props: Props) {
        super(props);
        if (this.state === undefined) {
            this.state = {
                weather: "",
                poll: undefined,
                rocketData: undefined,
                boosterData: undefined,
                payloadData: undefined,
                launch: "",
            };
        }

        this.getWeather = this.getWeather.bind(this);
        this.getPoll = this.getPoll.bind(this);
        this.createPoll = this.createPoll.bind(this);
        this.validateWeather = this.validateWeather.bind(this);
        this.validateMission = this.validateMission.bind(this);
        this.validateRocket = this.validateRocket.bind(this);
        this.destroyBooster = this.destroyBooster.bind(this);
        this.launchBooster = this.launchBooster.bind(this);
        this.validateRocket = this.validateRocket.bind(this);
        this.Weather = this.Weather.bind(this);

        this.weatherAPI = new WeatherAPI();
        this.missionAPI = new MissionAPI();
        this.boosterAPI = new BoosterAPI();
    }

    getWeather() {
        this.weatherAPI.getWeather().then(res => {
            this.setState({
                weather: res.data
            });
        });
    }

    getPoll() {
        this.missionAPI.getPoll().then(res => {
            this.setState({
                poll: res.data
            });
        });
    }

    createPoll() {
        this.missionAPI.createPoll()
            .then(res => {
                this.setState({
                    poll: Object.assign(new Poll(), res.data)
                });
                alert(`Poll created!`);
            });
    }

    validateWeather() {
        this.missionAPI.modifyPoll("weather", "true")
            .then(res => {
                this.setState({
                    poll: Object.assign(new Poll(), res.data)
                });
                alert(`Voted ${res.data.weatherStatus} for weather.`);
            });
    }

    validateRocket() {
        this.missionAPI.modifyPoll("rocket", "true")
            .then(res => {
                this.setState({
                    poll: Object.assign(new Poll(), res.data)
                });
                alert(`Voted ${res.data.rocketStatus} for rocket.`);
            })
            .catch(() => {
            });
    }

    validateMission() {
        this.missionAPI.modifyPoll("mission", "true").then(res => {
            this.setState({
                poll: Object.assign(new Poll(), res.data)
            });
            alert(`Voted ${res.data.rocketStatus} for mission.`);
        });
    }

    Weather() {
        if (this.state.weather == "Sunny") return <img width="200" height="200"
                                                       src="https://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png"/>
        else if (this.state.weather == "Cloudy") return <img width="200" height="200"
                                                             src="https://cdn.iconscout.com/icon/free/png-256/cloudy-1602000-1358407.png"/>
        else if (this.state.weather == "Rainy") return <img width="200" height="200"
                                                            src="https://www.iconfinder.com/data/icons/weather-bright-flat-design/128/rainy-cloud-rain-weather-512.png"/>
        return <div/>
    }

    launchBooster() {
        this.boosterAPI.launchBoosterSOAP();
    }

    destroyBooster() {
        this.boosterAPI.destroyBooster();
    }

    render() {
        return (
            <View>
                <div className="container">
                    <h1>Blue_origin</h1>
                    <img className="img-center"
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgbpCl7HYNNTII3ThedTf17lRr1cdKwT5ikA&usqp=CAU"/>
                    <div className="row">

                        <div className="col-sm">
                            <h2>Weather department</h2>
                            <Button variant="contained" color="primary" onClick={this.getWeather}>
                                Get weather
                            </Button>
                            <p>{this.state.weather}</p>
                            <this.Weather/>
                            <br/>
                            <Button variant="contained" color="secondary" onClick={this.validateWeather}>
                                Validate on mission poll
                            </Button>
                        </div>

                        <div className="col-sm">
                            <RocketMonitor validateRocket={this.validateRocket}/>

                        </div>

                        <div className="col-sm">
                        <h2>Booster department</h2>
                        <Button variant="contained" color="primary" onClick={this.launchBooster}>
                            Launch Booster
                        </Button>
                        <Button variant="contained" color="primary" onClick={this.destroyBooster}>
                            Destroy Booster
                        </Button>

                        </div>

                        <div className="col-sm">
                            <h2>Mission department</h2>
                            <Button variant="contained" color="secondary" onClick={this.createPoll}>
                                Create the poll
                            </Button>
                            <br/>
                            <Button variant="contained" color="primary" onClick={this.getPoll}>
                                Refresh the poll
                            </Button>
                            {this.state.poll !== undefined &&
                            <>
                                <p>Weather status : {this.state.poll?.weatherStatus ? "On" : "Off"}</p>
                                <p>Rocket status : {this.state.poll?.rocketStatus ? "On" : "Off"}</p>
                                <p>Mission status : {this.state.poll?.missionStatus ? "On" : "Off"}</p>
                            </>
                            }

                            <br/>
                            <Button variant="contained" color="secondary" onClick={this.validateMission}>
                                Validate on poll
                            </Button>
                        </div>

                    </div>
                    <div className="col-sm">
                        <TelemetryMonitor/>
                    </div>
                </div>
            </View>
        );
    }
}

export default Home;