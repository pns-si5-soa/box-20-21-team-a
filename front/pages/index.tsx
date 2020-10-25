import React, { useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import View from '../components/View';
import './index.scss';
import Button from '@material-ui/core/Button';
import Poll from '../src/main/model/Poll';
import WeatherAPI from '../src/main/API/rest/weatherAPI';
import MissionAPI from '../src/main/API/rest/missionAPI';
import BoosterAPI from '../src/main/API/soap/jquery-calls/boosterAPI';
import MissionsCoordinatorAPI from '../src/main/API/rest/missionsCoordinatorAPI';

interface IMission{
	id :number;
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
	
	
	const [missions, setMissions] = React.useState<IMission[]>([]);
	const missionAPI = new MissionAPI();
	const missionsCoordinatorAPI = new MissionsCoordinatorAPI();

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	// Similaire à componentDidMount et componentDidUpdate :
	useEffect(() => {
		// Met à jour le titre du document via l’API du navigateur
		/*missionsCoordinatorAPI.getMissions().then((res) =>{
			console.log(res.data);
			setMissions(res.data);
		});*/
	  });

	const createPoll = function () {
		missionAPI.createPoll().then((res) => {
			missionsCoordinatorAPI.getMissions().then((res) =>{
				console.log(res.data);
				setMissions(res.data);
			});
			//setPoll(Object.assign(new Poll(), res.data));
			alert(`Poll and mission created!`);

		});
	};
	

	function MissionsButtons(){
		
		return (
			<>
			  {missions.map((mission) => (
				<a class="link-button" href={'mission/'+mission.id}>{mission.id}</a>
			  ))}
			</>
		  );
		
	}

	
	return (
		<View>
			<div className="container">
				<h1 style={{ textAlign: 'center' }}>Blue_origin</h1>
				<img
					className="img-center"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgbpCl7HYNNTII3ThedTf17lRr1cdKwT5ikA&usqp=CAU"
				/>
				<div className={classes.root}>

					<div>
						<h2>Missions</h2>
						<MissionsButtons />
					</div>
						
						<Button
							variant="contained"
							color="secondary"
							onClick={createPoll}
						>
							Create the poll
						</Button>
						<br />
						
				</div>
			</div>
		</View>
	);
}