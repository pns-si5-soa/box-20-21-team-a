import express = require('express');
const router = express.Router();
import TelemetryService from "../../services/telemetry-service";

router.post('/', (req, res) => {
    try {
        if(req.body.boosterData === undefined) {
            res.status(500).send("Error: BoosterData wasn't sent");
            return;
        }
        res.send(TelemetryService.addBoosterData(req.body.boosterData));
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

router.get('/', (req, res) => {
    try {
        res.send(TelemetryService.getBoosterData());
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

export default router