import express = require('express');
import { removeMany } from '../../db/Mongo';
const router = express.Router();
import TelemetryService from "../../services/telemetry-controller";

router.get('/', (req, res) => {
    TelemetryService.getBoosterData().then(data => {
        res.send(data);
    }).catch(err => {
        console.error(err)
        res.status(500).send(err)
    })
});

router.get('/:id', (req, res) => {
    console.log({missionId: req.params.id})
    TelemetryService.getBoosterData({missionId: parseInt(req.params.id)}).then(data => {
        res.send(data);
    }).catch(err => {
        console.error(err)
        res.status(500).send(err)
    })
});

export default router;