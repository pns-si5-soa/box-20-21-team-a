import express = require('express');

const router = express.Router();

import boostersRouter from './boosters';


router.use("/boosters", boostersRouter)

export default router;