import React from 'react';
import Button from '@material-ui/core/Button';
import View from '../components/View'
import "./index.scss";

import execute from "../src/main/Services/Execute"

// function Weather(props) {
//     if(props.weather == "Sunny") return <img width="200" height="200" src="https://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png"></img>
//     else if(weather == "Cloudy") return <img width="200" height="200" src="https://cdn.iconscout.com/icon/free/png-256/cloudy-1602000-1358407.png"></img>
//     else if(weather == "Rainy") return <img width="200" height="200" src="https://www.iconfinder.com/data/icons/weather-bright-flat-design/128/rainy-cloud-rain-weather-512.png"></img>
// }

type Props = {}

class Home extends React.Component<{}, { weather: string }> {
	constructor(props: Props) {
        super(props);
        this.state = {
            weather: ""
        }
        this.getWeather = this.getWeather.bind(this)
        this.Weather = this.Weather.bind(this)
    }
    
    getWeather() {
        execute.execute("weather", "get")?.then(res => {
            this.setState({
                weather: res.data
            })
        })
    }

    Weather() {
        if(this.state.weather == "Sunny") return <img width="200" height="200" src="https://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png"></img>
        else if(this.state.weather == "Cloudy") return <img width="200" height="200" src="https://cdn.iconscout.com/icon/free/png-256/cloudy-1602000-1358407.png"></img>
        else if(this.state.weather == "Rainy") return <img width="200" height="200" src="https://www.iconfinder.com/data/icons/weather-bright-flat-design/128/rainy-cloud-rain-weather-512.png"></img>
        return <div></div>
    }

	render() {
		return (
			<View>
				<div className="container">
                    <h1>Blue_origin</h1>
                    <img className="img-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgbpCl7HYNNTII3ThedTf17lRr1cdKwT5ikA&usqp=CAU"></img>
                    <h2>Weather</h2>
                    <Button variant="contained" color="primary" onClick={this.getWeather}>
                        Get the weather
                    </Button>
                    <p>{this.state.weather}</p>
                    <this.Weather />
                </div>
			</View>
		);
	}
}

export default Home;