import express = require('express');
const router = express.Router();

import missionRouter from './mission';
import boosterRouter from './booster';
import rocketRouter from './rocket';

router.use("/mission", missionRouter);
router.use("/booster",boosterRouter);
router.use("/rocket",rocketRouter);

export default router;