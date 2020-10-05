import express = require('express');

const router = express.Router();

import TelemetryService from "../../services/telemetry-service";

router.post('/data', (req, res) => {
    try {
        if(req.body.rocketStatus === undefined || req.body.fuelLevel === undefined) {
            res.status(500).send("Error: RocketSatus or fuelLevel don't sended");
            return;
        }
        res.send(TelemetryService.addData(parseInt(req.body.rocketStatus, 10), parseInt(req.body.fuelLevel, 10)));
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

router.get('/data', (req, res) => {
    try {
        res.send(TelemetryService.getData());
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

export default router;