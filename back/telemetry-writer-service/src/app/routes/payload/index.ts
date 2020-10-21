import express = require('express');
const router = express.Router();
import TelemetryService from "../../services/telemetry-controller";

router.get('/', (req, res) => {
    TelemetryService.getPayloadData().then(payloadData => {
        res.json(payloadData)
    }).catch(err => {
        res.status(500).send(err)
    })
})

export default router;