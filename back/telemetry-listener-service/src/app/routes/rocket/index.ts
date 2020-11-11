import TelemetryController from "../../services/telemetry-controller";
import express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
    try {
        if(req.body.rocketData === undefined) {
            res.status(500).send("Error: Rocket wasn't sent");
            return;
        }
        console.log('Rocket data received : ')
        console.log(req.body.rocketData)
        TelemetryController.addRocketData(req.body.rocketData)
        res.send("sent");
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

export default router;