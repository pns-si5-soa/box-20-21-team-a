import express = require('express')
const router = express.Router();

import missionouter from "./mission"

router.use("/mission", missionouter)

export default router;