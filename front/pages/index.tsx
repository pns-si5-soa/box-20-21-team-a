import React from 'react';
import Button from '@material-ui/core/Button';
import View from '../components/View'
import "./index.scss";
import Poll from '../src/main/model/Poll'

import execute from "../src/main/Services/Execute"

type Props = {}

class Home extends React.Component<{}, { weather: string, rocket: string, poll: Poll|undefined }> {
	constructor(props: Props) {
        super(props);
        this.state = {
            weather: "",
            rocket: "",
            poll: undefined
        }
        this.getWeather = this.getWeather.bind(this)
        this.getRocket = this.getRocket.bind(this)
        this.getPoll = this.getPoll.bind(this)
        this.createPoll = this.createPoll.bind(this)
        this.validateRocket = this.validateRocket.bind(this)
        this.validateWeather = this.validateWeather.bind(this)
        this.validateMission = this.validateMission.bind(this)
        this.Weather = this.Weather.bind(this)
        this.Rocket = this.Rocket.bind(this)
    }
    
    getWeather() {
        execute.execute("weather", "get")?.then(res => {
            this.setState({
                weather: res.data
            })
        })
    }

    getRocket() {
        execute.execute("rocket", "get")?.then(res => {
            this.setState({
                rocket: res.data
            })
        })
    }

    getPoll() {
        execute.execute("mission", "get")?.then(res => {
            this.setState({
                poll: res.data
            })
        })
    }

    createPoll() {
        execute.execute("mission", "create")?.then(res => {
            this.setState({
                poll: Object.assign(new Poll(), res.data)
            })
        })
    }

    validateWeather() {
        execute.execute("mission", "put", "weather", "true")?.then(res => {
            this.setState({
                poll: Object.assign(new Poll(), res.data)
            })
        })
    }

    validateRocket() {
        execute.execute("mission", "put", "rocket", "true")?.then(res => {
            this.setState({
                poll: Object.assign(new Poll(), res.data)
            })
        })
    }

    validateMission() {
        execute.execute("mission", "put", "mission", "true")?.then(res => {
            this.setState({
                poll: Object.assign(new Poll(), res.data)
            })
        })
    }

    Weather() {
        if(this.state.weather == "Sunny") return <img width="200" height="200" src="https://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png"></img>
        else if(this.state.weather == "Cloudy") return <img width="200" height="200" src="https://cdn.iconscout.com/icon/free/png-256/cloudy-1602000-1358407.png"></img>
        else if(this.state.weather == "Rainy") return <img width="200" height="200" src="https://www.iconfinder.com/data/icons/weather-bright-flat-design/128/rainy-cloud-rain-weather-512.png"></img>
        return <div></div>
    }

    Rocket() {
        if(this.state.rocket == "Ready") return <img width="200" height="200" src="https://i.gyazo.com/b554011896d7014adc3a8d465cc187f1.png"></img>
        else if(this.state.rocket == "Not ready") return <img width="200" height="200" src="https://i.gyazo.com/e11fc8ba12124b0766adb46800c0690d.png"></img>
        return <div></div>
    }

	render() {
		return (
			<View>
				<div className="container">
                    <h1>Blue_origin</h1>
                    <img className="img-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgbpCl7HYNNTII3ThedTf17lRr1cdKwT5ikA&usqp=CAU"></img>
                    <div className="row">
                        <div className="col-sm">
                        <h2>Weather</h2>
                            <Button variant="contained" color="primary" onClick={this.getWeather}>
                                Get the weather
                            </Button>
                            <p>{this.state.weather}</p>
                            <this.Weather />
                            <br></br>
                            <Button variant="contained" color="secondary" onClick={this.validateWeather}>
                                Validate
                            </Button>
                        </div>
                        <div className="col-sm">
                            <h2>Rocket Status</h2>
                            <Button variant="contained" color="primary" onClick={this.getRocket}>
                                Get the rocket status
                            </Button>
                            <p>{this.state.rocket}</p>
                            <this.Rocket />
                            <br></br>
                            <Button variant="contained" color="secondary" onClick={this.validateRocket}>
                                Validate
                            </Button>
                        </div>
                        <div className="col-sm">
                            <h2>Poll</h2>
                            <Button variant="contained" color="secondary" onClick={this.createPoll}>
                                Create the poll
                            </Button>
                            <br></br>
                            <Button variant="contained" color="primary" onClick={this.getPoll}>
                                Refresh the poll
                            </Button>
                            <p>Weather status : {this.state.poll?.weatherStatus ? "On" : "Off"}</p>
                            <p>Rocket status : {this.state.poll?.rocketStatus ? "On" : "Off"}</p>
                            <p>Mission status : {this.state.poll?.missionStatus ? "On" : "Off"}</p>
                            <br></br>
                            <Button variant="contained" color="secondary" onClick={this.validateMission}>
                                Validate
                            </Button>
                        </div>
                    </div>
                </div>
			</View>
		);
	}
}

export default Home;