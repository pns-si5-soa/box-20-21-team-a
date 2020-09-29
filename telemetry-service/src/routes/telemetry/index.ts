import express = require('express')
const router = express.Router();

import TelemetryService from "../../services/telemetry-service";

let telemetry = new TelemetryService();

router.get('/data', (req, res) => {
    try {
        let telemetryData = telemetry.getData();
        res.send(telemetryData);
    } catch (e: any) {
        res.status(500).json({
        message: e.message
        });
    }
});

router.get('/rocketstatus', (req, res) => {
    try {
        let rocketStatus = telemetry.telemetryData.getRocketStatus();
        res.send(rocketStatus);
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

export default router;