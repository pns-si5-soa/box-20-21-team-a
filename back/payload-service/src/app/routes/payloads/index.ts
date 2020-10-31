import express = require('express')
const router = express.Router();

import payloadController from "../../controller/PayloadController"

router.post('/', (req, res) => {
    res.send({'created': payloadController.addNewPayload(req.body.id)});
    
});

export default router;