import express = require('express');
import { removeMany } from '../../db/Mongo';
const router = express.Router();
import TelemetryService from "../../services/telemetry-controller";

router.get('/', (req, res) => {
    try {
        TelemetryService.getBoosterData().then(data => {
            res.send(data);
        }).catch(err => {
            console.error(err)
            res.status(500).send(err)
        })
        
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

export default router;