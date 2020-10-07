import express = require('express')
const router = express.Router();
import boosterRouter from "./booster"
import rocketRouter from "./rocket"
import payloadRouter from "./payload"


router.use("/telemetry", boosterRouter)
router.use("/telemetry", rocketRouter)
router.use("/telemetry", payloadRouter)

export default router;