import express = require('express')
const router = express.Router();
import mission from "../../controller/MissionController";

router.get('/', (req, res) => {
    try {
        res.send(mission.getMissionStatusForBooster(req.params.id));
    } catch (e: any) {
        res.status(500).json({
            message: e.message
        });
    }
});

router.put('/',(req,res) => {
    try{
        res.send(mission.modifyMissionStatusForBooster(req.body));
    } catch (e:any){
        res.status(500).json({
            message: e.message
        });
    }
})

export default router;