export default class Poll {
	
	weather: boolean;

	rockets: boolean;


	constructor(weather: boolean = false, rockets: boolean = false) {
		this.weather = weather;
		this.rockets = rockets;
	}

	setWeather(weather: boolean){
		this.weather= weather;
	}

	setRockets(rockets: boolean){
		this.rockets= rockets;
	}


}