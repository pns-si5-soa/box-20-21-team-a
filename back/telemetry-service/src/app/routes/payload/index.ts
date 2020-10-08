import express = require('express');
const router = express.Router();
import TelemetryService from "../../services/telemetry-service";

router.post('/', (req, res) => {
    try {
        if(req.body.payloadData === undefined) {
            res.status(500).send("Error: PayloadData wasn't sent");
            return;
        }
        res.send(TelemetryService.addPayloadData(req.body.payloadData));
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

router.get('/', (req, res) => {
    try {
        res.send(TelemetryService.getPayloadData());
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

export default router