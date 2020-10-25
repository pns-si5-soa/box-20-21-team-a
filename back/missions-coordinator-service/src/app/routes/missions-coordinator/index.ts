import express = require('express')
const router = express.Router();

//import weather from "../../services/missions-coordinator-service"
import missionsCoordinationController from "../../controller/MissionsCoordinationController"

router.get('/', (req, res) => {
    res.send(missionsCoordinationController.listMissions());
});
router.get('/:id', (req, res) => {
    res.send(missionsCoordinationController.missionExists(parseInt(req.params.id)));
});
router.post('/', (req, res) => {
    res.send({missionId : missionsCoordinationController.createNewMission()});
});

export default router;