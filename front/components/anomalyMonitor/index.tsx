import React, {useEffect, useState} from 'react';
import AnomalyAPI from "../../src/main/API/rest/anomalyAPI";
import {Anomaly, mapAnomalyToText} from "../../src/main/model/Anomaly";
import {Button} from "@material-ui/core";
import BoosterAPI from "../../src/main/API/rest/boosterAPI";
import RocketAPI from "../../src/main/API/rest/rocketAPI";

const boosterAPI = new BoosterAPI();
const rocketAPI = new RocketAPI();
const anomalyAPI = new AnomalyAPI();

interface IProps {
    id: string;
}


const AnomalyMonitor = (props: IProps) => {
    const [anomalyList, setAnomalyList] = useState([]);


    useEffect(() => {
        setInterval(() => {
            getAnomalies();
        }, 3000);
    }, []);

    const getAnomalies = () => {

        anomalyAPI.getAnomaly(props.id)
            .then(res => {
                const tempAnomalyList = res.data.map((ano: Anomaly) =>
                    <div>{mapAnomalyToText[ano]}</div>
                );
                setAnomalyList(tempAnomalyList);
            })
            .catch((err) => {
                console.error(err)
            });
    }


    function DrainRocket() {
        rocketAPI.drainFuelTank(props.id);
    }

    function DrainBooster() {
        boosterAPI.drainFuelTank(props.id);
    }

    function MakeRocketFall() {
        rocketAPI.makeRocketFall(props.id);
    }

    return (
        <>
            <br></br>
            <br></br>
            <h2>Anomaly monitoring</h2>
            <div className="row">
                <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                       {anomalyList}
                    </div>
                </div>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={DrainRocket}
                >Drain Rocket Fuel Tank</Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={DrainBooster}
                >Drain Booster Fuel Tank</Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={MakeRocketFall}
                >Skyfall</Button>
            </div>
        </>
    )

};

export default AnomalyMonitor;