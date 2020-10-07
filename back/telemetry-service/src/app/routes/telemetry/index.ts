import express = require('express');

const router = express.Router();

import TelemetryService from "../../services/telemetry-service";

router.post('/rocketdata', (req, res) => {
    try {
        if(req.body.rocketData === undefined) {
            res.status(500).send("Error: RocketData wasn't sent");
            return;
        }
        res.send(TelemetryService.addRocketData(req.body.rocketData));
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

router.get('/rocketdata', (req, res) => {
    try {
        res.send(TelemetryService.getRocketData());
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

router.post('/payloaddata', (req, res) => {
    try {
        if(req.body.payloadData === undefined) {
            res.status(500).send("Error: PayloadData wasn't sent");
            return;
        }
        res.send(TelemetryService.addPayloadData(req.body.payloadData));
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

router.get('/rocketdata', (req, res) => {
    try {
        res.send(TelemetryService.getRocketData());
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

router.post('/boosterdata', (req, res) => {
    try {
        if(req.body.boosterData === undefined) {
            res.status(500).send("Error: BoosterData wasn't sent");
            return;
        }
        res.send(TelemetryService.addBoosterData(req.body.boosterData));
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

router.get('/boosterdata', (req, res) => {
    try {
        res.send(TelemetryService.getBoosterData());
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

export default router;