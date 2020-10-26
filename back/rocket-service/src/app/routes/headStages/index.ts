import express = require('express')
const router = express.Router();

//import weather from "../../services/missions-coordinator-service"
import controller from "../../controller/index"

router.get('/drainfuel/:id', (req, res) => {
    res.send(controller.drainRocket(parseInt(req.params.id)))
});

router.get('/makerocketfall/:id', (req, res) => {
    res.send(controller.makeRocketFall(parseInt(req.params.id)))
});


router.post('/', (req, res) => {

    res.send({'created': controller.addNewRocket(parseInt(req.body.id))});
});

export default router;