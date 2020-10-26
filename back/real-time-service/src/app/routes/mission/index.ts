import express = require('express')
const router = express.Router();

import mission from "../../controller/mission"

router.get('/:id', (req, res) => {
    res.status(200).json(mission.getStatus(parseInt(req.params.id)));
});

router.post('/', (req, res) => {
    res.send({'created': mission.addNewMission(parseInt(req.body.id))});
    
});

export default router;