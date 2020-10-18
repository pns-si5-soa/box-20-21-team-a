import express = require('express');
const router = express.Router();

import pollRouter from './poll';
import boosterRouter from './booster';
import rocketRouter from './rocket';

router.use("/poll", pollRouter);
router.use("/booster",boosterRouter);
router.use("/rocket",rocketRouter);

export default router;