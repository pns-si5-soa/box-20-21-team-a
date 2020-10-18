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
    TelemetryService.getPayloadData().then(data => {
        res.send(data);
    }).catch( (error) => {
        res.status(500).json({
            message: error.message
        });
    });
});

export default router;