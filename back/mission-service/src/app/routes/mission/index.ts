import express = require('express')
const router = express.Router();
import mission from "../../controller/MissionController";


router.post('/', (req, res) => {
    res.send({'created': mission.addNewMission(req.body.id)}); 
});

export default router;