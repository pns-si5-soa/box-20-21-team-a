import express = require('express');
import TelemetryService from "../../services/telemetry-controller";

const router = express.Router();

router.get('/', (req, res) => {
    TelemetryService.getBoosterData().then(data => {
        res.send(data);
    }).catch(err => {
        res.send(null)
    })
});

router.get('/:id/all', (req, res) => {
    TelemetryService.getAllBoosterData({missionId: req.params.id}).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(null)
    })
});

router.get('/:id', (req, res) => {
    console.log({missionId: req.params.id})

    TelemetryService.getBoosterData({missionId: req.params.id}).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(null);
    })
});

export default router;