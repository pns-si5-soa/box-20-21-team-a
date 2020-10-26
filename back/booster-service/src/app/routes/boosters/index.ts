import express = require('express')
const router = express.Router();

import boosterController from "../../controller/index"

router.post('/', (req, res) => {
    res.send({'created': boosterController.addNewBooster(parseInt(req.body.id))});
});

router.get('/drainfuel/:id', (req, res) => {
    res.send(boosterController.drainBooster(parseInt(req.params.id)));
});

export default router;