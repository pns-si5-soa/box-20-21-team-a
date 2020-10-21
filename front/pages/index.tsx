import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import View from '../components/View';
import './index.scss';
import Button from '@material-ui/core/Button';
import Poll from '../src/main/model/Poll';
import RocketMonitor from '../components/rocketMonitor';
import WeatherAPI from '../src/main/API/rest/weatherAPI';
import MissionAPI from '../src/main/API/rest/missionAPI';
import BoosterAPI from '../src/main/API/soap/jquery-calls/boosterAPI';
import RocketData from '../src/main/model/Rocket/RocketData';
import BoosterData from '../src/main/model/Booster/BoosterData';
import PayloadData from '../src/main/model/Payload/PayloadData';
import TelemetryMonitor from '../components/telemetryMonitor';
import RealTime from '../components/real-time'
interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
}
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
function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}
function a11yProps(index: any) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}
const useStyles = makeStyles((theme: Theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));
export default function Home() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const [currentWeather, setWeather] = React.useState('');
	const [poll, setPoll] = React.useState<Poll | undefined>(undefined);
	const weatherAPI = new WeatherAPI();
	const missionAPI = new MissionAPI();
	const boosterAPI = new BoosterAPI();
	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
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
	const createPoll = function () {
		missionAPI.createPoll().then((res) => {
			setPoll(Object.assign(new Poll(), res.data));
			alert(`Poll created!`);
		});
	};
	const validateWeather = function () {
		missionAPI.modifyPoll('weather', 'true').then((res) => {
			setPoll(Object.assign(new Poll(), res.data));
			alert(`Voted ${res.data.weatherStatus} for weather.`);
		});
	};
	const validateRocket = function () {
		missionAPI
			.modifyPoll('rocket', 'true')
			.then((res) => {
				setPoll(Object.assign(new Poll(), res.data));
				alert(`Voted ${res.data.rocketStatus} for rocket.`);
			})
			.catch(() => {});
	};
	const validateMission = function () {
		missionAPI.modifyPoll('mission', 'true').then((res) => {
			setPoll(Object.assign(new Poll(), res.data));
			alert(`Voted ${res.data.rocketStatus} for mission.`);
		});
	};

	const destroyBooster = function () {
		boosterAPI.destroyBooster();
	};
	return (
		<View>
			<div className="container">
				<h1 style={{ textAlign: 'center' }}>Blue_origin</h1>
				<img
					className="img-center"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgbpCl7HYNNTII3ThedTf17lRr1cdKwT5ikA&usqp=CAU"
				/>
				<div className={classes.root}>
					<AppBar position="static">
						<Tabs
							value={value}
							onChange={handleChange}
							aria-label="simple tabs example"
						>
							<Tab label="Weather Department" {...a11yProps(0)} />
							<Tab label="Rocket Department" {...a11yProps(1)} />
							<Tab label="Booster Department" {...a11yProps(2)} />
							<Tab label="Mission Department" {...a11yProps(3)} />
						</Tabs>
					</AppBar>
					<TabPanel value={value} index={0}>
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
					</TabPanel>
					<TabPanel value={value} index={1}>
						<RocketMonitor validateRocket={validateRocket} />
					</TabPanel>
					<TabPanel value={value} index={2}>
						<h2>Booster department</h2>
						<Button
							variant="contained"
							color="primary"
							onClick={destroyBooster}
						>
							Destroy Booster
						</Button>
					</TabPanel>
					<TabPanel value={value} index={3}>
						<h2>Mission department</h2>
						<Button
							variant="contained"
							color="secondary"
							onClick={createPoll}
						>
							Create the poll
						</Button>
						<br />
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
					</TabPanel>
					<RealTime></RealTime>
					<TelemetryMonitor />
				</div>
			</div>
		</View>
	);
}