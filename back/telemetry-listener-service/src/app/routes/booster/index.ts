import express = require('express');
const router = express.Router();
import TelemetryController from "../../services/telemetry-controller";

router.post('/', (req, res) => {
    try {
        if(req.body.boosterData === undefined) {
            res.status(500).send("Error: BoosterDataMission wasn't sent");
            return;
        }
        console.log(req.body.boosterData)
        res.send(TelemetryController.addBoosterData(req.body.boosterData));
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

export default router;