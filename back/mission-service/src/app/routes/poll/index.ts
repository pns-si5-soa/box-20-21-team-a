import express = require('express')
const router = express.Router();
import mission from "../../controller/MissionController";

router.post('/', async (req, res) => {
    try {
        res.send( mission.createPoll());
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

//todo insert name and answer at the body
router.put('/', (req, res) => {
    try {
        const result = mission.modifyPoll(req.body.service_name, JSON.parse(req.body.answer),req.body.id).then(
            (value) =>{
                res.send(value);
            }
        )
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

router.get('/:id', (req, res) => {
    try {
        res.send(mission.getPoll(req.params.id));
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

export default router;