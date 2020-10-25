import express = require('express')
const router = express.Router();

//import weather from "../../services/missions-coordinator-service"
import controller from "../../controller/index"

router.get('/', (req, res) => {
    
});
router.post('/', (req, res) => {

    res.send({'created': controller.addNewRocket(parseInt(req.body.id))});
});

export default router;