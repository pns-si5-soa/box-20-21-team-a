import express = require('express')
const router = express.Router();

import TelemetryService from "../../services/telemetry-service";
import TelemetryData from "../../entities/telemetryData";


router.post('/data',(req, res) => {
    try {
        res.send(TelemetryService.addData(req))
    } catch (e : any) {
        res.status(500).json({
            message: e.message
        });
    }
});

router.get('/data', (req, res) => {
    try {
        let telemetryData = TelemetryService.getData();
        res.send(telemetryData);
    } catch (e: any) {
        res.status(500).json({
        message: e.message
        });
    }
});

router.get('/rocketstatus', (req, res) => {
    try {

        let rocketStatus : TelemetryData | undefined = TelemetryService.telemetryDataArray.pop();

        if( rocketStatus!== undefined ){
            TelemetryService.telemetryDataArray.push(rocketStatus);
            res.send(rocketStatus.getRocketStatus());
        }

    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

export default router;