import express = require('express');

const router = express.Router();
import TelemetryController from "../../services/telemetry-controller";

router.post('/', (req, res) => {
    try {
        if(req.body.payloadData === undefined) {
            res.status(500).send("Error: PayloadData wasn't sent");
            return;
        }
        console.log('Payload data received : ',  req.body.payloadData)
        TelemetryController.addPayloadData(req.body.payloadData)
        res.send("sent");
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

export default router;