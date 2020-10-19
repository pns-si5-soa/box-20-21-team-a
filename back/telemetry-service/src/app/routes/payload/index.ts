import express = require('express');
const router = express.Router();
import TelemetryService from "../../services/telemetry-service";

router.post('/', (req, res) => {
    try {
        if(req.body.payloadData === undefined) {
            res.status(500).send("Error: PayloadData wasn't sent");
            return;
        }
        TelemetryService.addPayloadData(req.body.payloadData)
        res.send();
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

router.get('/', (req, res) => {
    TelemetryService.getPayloadData().then(payloadData => {
        res.json(payloadData)
    }).catch(err => {
        res.status(500).send(err)
    })
})

export default router;