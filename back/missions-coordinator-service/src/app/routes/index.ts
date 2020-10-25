import express = require('express')
const router = express.Router();

import missionsRouter from './missions-coordinator'

router.use("/missions-coordinator", missionsRouter)

export default router;