import express = require('express')
const router = express.Router();
import mission from "../../services/MissionService";

router.post('/', (req, res) => {
    try {
        res.send(mission.createPoll());
    } catch (e: any) {
        res.send(500).json({
            message: e.message
        });
    }
});

//todo insert name and answer at the body
router.put('/', (req, res) => {
    try {
        const result = mission.modifyPoll(req.body.service_name, JSON.parse(req.body.answer));
        res.send(result);
    } catch (e: any) {
        res.send(500).json({
            message: e.message
        });
    }
});

router.get('/', (req, res) => {
    try {
        res.send(mission.getPoll());
    } catch (e: any) {
        res.send(500).json({
            message: e.message
        });
    }
});

export default router;