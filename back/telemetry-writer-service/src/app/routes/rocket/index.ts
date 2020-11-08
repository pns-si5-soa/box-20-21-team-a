import TelemetryService from "../../services/telemetry-controller";
import express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
        TelemetryService.getRocketData().then(data => {
            res.send(data);
        }).catch( (error) => {
            res.send(null)
        });
});

router.get('/:id', (req, res) => {
    TelemetryService.getRocketData({missionId: req.params.id}).then(data => {
        res.send(data);
    }).catch( (error) => {
        res.send(null)
    });
});

export default router;