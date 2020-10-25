import express = require('express');
import AnomalyAnalyserService from '../controller/AnomalyAnalyserService';
import {parse} from "dotenv";
const router = express.Router();


router.get('/anomaly/:id',(req,res) => {
    try {
        res.send(AnomalyAnalyserService.getAnomalies(parseInt(req.params.id)));
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

export default router;