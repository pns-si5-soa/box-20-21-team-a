import express = require('express')
import BoosterData from '../entities/BoosterData';

const router = express.Router();

const booster = new BoosterData();

router.get('/', function(req, res) {
    booster.launch()
    res.status(200).send("Launched")
})

router.get('/get', function(req, res) {
    res.status(200).json(booster.toObjectJSON())
})

export default router;
