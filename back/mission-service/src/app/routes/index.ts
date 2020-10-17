import express = require('express')
const router = express.Router();

import pollRouter from './poll'
import boosterRouter from './booster'

router.use("/poll", pollRouter)
router.use("/booster",boosterRouter)

export default router;