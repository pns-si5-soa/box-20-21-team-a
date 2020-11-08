import express = require('express');

const router = express.Router();

import missionrouter from "./mission"

router.use("/mission", missionrouter)

export default router;