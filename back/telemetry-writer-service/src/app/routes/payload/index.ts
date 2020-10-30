import express = require('express');
const router = express.Router();
import TelemetryService from "../../services/telemetry-controller";

router.get('/', (req, res) => {
    TelemetryService.getPayloadData().then(payloadData => {
        res.json(payloadData)
    }).catch(err => {
        res.send(null)
    })
})

router.get('/:id', (req, res) => {
    TelemetryService.getPayloadData({missionId: req.params.id}).then(payloadData => {
        res.json(payloadData)
    }).catch(err => {
        res.send(null)
    })
})



export default router;