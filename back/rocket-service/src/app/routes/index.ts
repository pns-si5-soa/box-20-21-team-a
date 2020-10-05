import express = require('express');
const router = express.Router();

import rocketRouter from './rocket'

router.use("/rocket", rocketRouter);

export default router;