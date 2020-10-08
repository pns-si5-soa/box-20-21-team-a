import rocketService from "../../services/rocket-service";
import express = require('express')

const router = express.Router();

router.post('/launch', (req, res) => {
    res.send(rocketService.launch());
});

/*router.post('/stage', (req, res) => {
    res.send(rocketService.stageRocketMidFlight());
});

router.post('/payload', (req, res) => {
    res.send(rocketService.deliverPayload());
});*/

export default router;