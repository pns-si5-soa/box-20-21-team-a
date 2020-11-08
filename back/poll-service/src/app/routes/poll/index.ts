import express = require('express');

const router = express.Router();

import poll from "../../controller"

router.get('/:id', (req, res) => {
    res.status(200).json(poll.getPoll(req.params.id));
});

router.post('/', (req, res) => {
    res.send({'created': poll.addNewPoll(req.body.id)});
    
});

//todo insert name and answer at the body
router.put('/', (req, res) => {
    res.status(200).json(poll.modifyPoll(req.body.service_name, JSON.parse(req.body.answer),req.body.id));
});

export default router;