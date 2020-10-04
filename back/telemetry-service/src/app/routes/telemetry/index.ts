import express = require('express');

const router = express.Router();

import TelemetryService from "../../services/telemetry-service";

router.post('/data', (req, res) => {
    try {
        res.send(TelemetryService.addData(req));
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