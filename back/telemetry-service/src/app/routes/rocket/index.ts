import TelemetryService from "../../services/telemetry-service";
import express = require('express');
const router = express.Router();



router.post('/', (req, res) => {
    try {
        if(req.body.rocketData === undefined) {
            res.status(500).send("Error: Rocket wasn't sent");
            return;
        }
        res.send(TelemetryService.addRocketData(req.body.rocketData));
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

router.get('/', (req, res) => {
    try {
        res.send(TelemetryService.getRocketData());
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

export default router;