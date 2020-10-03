import express = require('express')
const router = express.Router();

import telemetryRouter from './telemetry'

router.use("/telemetry", telemetryRouter)

export default router;