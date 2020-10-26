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

router.get('/:id', (req, res) => {
    TelemetryService.getPayloadData({missionId: parseInt(req.params.id)}).then(payloadData => {
        res.json(payloadData)
    }).catch(err => {
        res.status(500).send(err)
    })
})



export default router;