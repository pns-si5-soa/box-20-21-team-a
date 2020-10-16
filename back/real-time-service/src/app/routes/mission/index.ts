import express = require('express')
const router = express.Router();

import mission from "../../controller/mission"

router.get('/', (req, res) => {
    res.send(mission.getStatus());
});

export default router;