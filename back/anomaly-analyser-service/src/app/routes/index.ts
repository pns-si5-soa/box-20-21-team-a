import express = require('express');
import AnomalyAnalyserService from '../controller/AnomalyAnalyserService';
const router = express.Router();


router.get('/anomaly',(req,res) => {
    try {
        res.send(AnomalyAnalyserService.getAnomalies())
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

export default router;