import express = require('express');
import { removeMany } from '../../db/Mongo';
const router = express.Router();
import TelemetryService from "../../services/telemetry-service";

router.post('/', (req, res) => {
    try {
        if(req.body.boosterData === undefined) {
            res.status(500).send("Error: BoosterDataMission wasn't sent");
            return;
        }
        console.log(req.body.boosterData)
        res.send(TelemetryService.addBoosterData(req.body.boosterData));
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

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

//NOTE Just to removing element on database
router.delete('/', (req, res) => {
    removeMany("BoosterData").then(r => {
        res.send(r)
    })
})

export default router;