import express = require('express')
const router = express.Router();

import boosterController from "../../controller/index"

router.post('/', (req, res) => {
    res.send({'created': boosterController.addNewBooster(parseInt(req.body.id))});
    
});


export default router;