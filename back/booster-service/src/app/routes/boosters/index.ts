import express = require('express');

const router = express.Router();

import boosterController from "../../controller/index"

router.post('/', (req, res) => {
    res.send({'created': boosterController.addNewBooster(req.body.id)});
});

router.get('/drainfuel/:id', (req, res) => {
    res.send(boosterController.drainBooster(req.params.id));
});

export default router;