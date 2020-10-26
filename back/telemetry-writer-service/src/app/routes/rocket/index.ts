import TelemetryService from "../../services/telemetry-controller";
import express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
        TelemetryService.getRocketData().then(data => {
            res.send(data);
        }).catch( (error) => {
            res.status(500).json({
                message: error.message
            });
        });
});

router.get('/:id', (req, res) => {
    TelemetryService.getRocketData({missionId: parseInt(req.params.id)}).then(data => {
        res.send(data);
    }).catch( (error) => {
        res.status(500).json({
            message: error.message
        });
    });
});

export default router;