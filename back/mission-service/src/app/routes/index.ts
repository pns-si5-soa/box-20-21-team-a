import express = require('express')
const router = express.Router();

import pollRouter from './poll'

router.use("/poll", pollRouter)

export default router;