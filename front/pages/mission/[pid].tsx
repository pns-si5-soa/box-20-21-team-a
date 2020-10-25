import { useRouter } from "next/router";
import React, { useEffect } from 'react';
import TelemetryMonitor from "../../components/telemetryMonitor";
import RealTime from "../../components/real-time";
import BoosterAPI from "../../src/main/API/soap/jquery-calls/boosterAPI";
import RocketMonitor from "../../components/rocketMonitor";
import Button from "@material-ui/core/Button";
import View from "../../components/View";
import Box from "@material-ui/core/Box";
import '../index.scss';
import Poll from '../../src/main/model/Poll';
import WeatherAPI from '../../src/main/API/rest/weatherAPI';
import MissionAPI from '../../src/main/API/rest/missionAPI';
import MissionsCoordinatorAPI from '../../src/main/API/rest/missionsCoordinatorAPI';


const Post = () => {
    const router = useRouter();
    const pids = router.query.pid;
    if (Array.isArray(pids) || pids == undefined) {
        return <p>Impossible to find a mission with id : {pids}</p>;
    }

    if (!Number.isInteger(parseInt(pids))) {
        return <p>Impossible to find a mission with id : {pids}</p>;
    }
    const pid = parseInt(pids);

    const [currentWeather, setWeather] = React.useState('');
    const [poll, setPoll] = React.useState<Poll | undefined>(undefined);
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};
    function Weather(weather: any) {
        if (weather == 'Sunny')
            return (
                <img
                    width="200"
                    height="200"
                    src="https://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png"
                />
            );
        else if (weather == 'Cloudy')
            return (
                <img
                    width="200"
                    height="200"
                    src="https://cdn.iconscout.com/icon/free/png-256/cloudy-1602000-1358407.png"
                />
            );
        else if (weather == 'Rainy')
            return (
                <img
                    width="200"
                    height="200"
                    src="https://www.iconfinder.com/data/icons/weather-bright-flat-design/128/rainy-cloud-rain-weather-512.png"
                />
            );
        return <div />;
    }
    const boosterAPI = new BoosterAPI();
    const weatherAPI = new WeatherAPI();
	const missionAPI = new MissionAPI();
    const missionsCoordinatorAPI = new MissionsCoordinatorAPI();
    
    const destroyBooster = function () {
        boosterAPI.destroyBooster(pid);
    };
    const getWeather = function () {
		weatherAPI.getWeather().then((res) => {
			setWeather(res.data);
		});
	};
	const getPoll = function () {
		missionAPI.getPoll().then((res) => {
			setPoll(res.data);
		});
    };
    
    const validateWeather = function () {
		missionAPI.modifyPoll('weather', 'true',pid).then((res) => {
			setPoll(Object.assign(new Poll(), res.data));
			alert(`Voted ${res.data.weatherStatus} for weather.`);
		});
	};
	const validateRocket = function () {
		missionAPI
			.modifyPoll('rocket', 'true',pid)
			.then((res) => {
				setPoll(Object.assign(new Poll(), res.data));
				alert(`Voted ${res.data.rocketStatus} for rocket.`);
			})
			.catch(() => {});
	};
	const validateMission = function () {
		missionAPI.modifyPoll('mission', 'true',pid).then((res) => {
			setPoll(Object.assign(new Poll(), res.data));
			alert(`Voted ${res.data.rocketStatus} for mission.`);

			
		});

		
		
	};

    return (
        <View>
           
            <div className="container">
			
                <h1 style={{ textAlign: "center" }}>Blue_origin</h1>
                <img
                    className="img-center"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgbpCl7HYNNTII3ThedTf17lRr1cdKwT5ikA&usqp=CAU"
                />
                <div>
				<h1>Mission {pid}</h1>
                <h2>Weather department</h2>
						<Button
							variant="contained"
							color="primary"
							onClick={getWeather}
						>
							Get weather
						</Button>
						<p>{currentWeather}</p>
						<Weather weather={currentWeather} />
						<br />
						<Button
							variant="contained"
							color="secondary"
							onClick={validateWeather}
						>
							Validate on mission poll
						</Button>

                    <RocketMonitor id={pid} />
                    <div><Button variant="contained" color="secondary" onClick={validateRocket}>
							Validate on mission poll
						</Button>
						</div>
					

                    <h2>Booster department</h2>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={destroyBooster}
                    >
                        Destroy Booster
                    </Button>

                    <RealTime id={pid}></RealTime>
                    <TelemetryMonitor id={pid} />
                </div>
                <Button
							variant="contained"
							color="primary"
							onClick={getPoll}
						>
							Refresh the poll
						</Button>
						{poll !== undefined && (
							<>
								<p>
									Weather status :{' '}
									{poll?.weatherStatus ? 'OK' : 'NO'}
								</p>
								<p>
									Rocket status :{' '}
									{poll?.rocketStatus ? 'OK' : 'NO'}
								</p>
								<p>
									Mission status :{' '}
									{poll?.missionStatus ? 'OK' : 'NO'}
								</p>
							</>
						)}
						<br />
						<Button
							variant="contained"
							color="secondary"
							onClick={validateMission}
						>
							Validate on poll
						</Button>			
            </div>
        </View>
    );
};

export default Post;
