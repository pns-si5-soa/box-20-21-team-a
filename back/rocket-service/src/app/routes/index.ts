import express = require('express')
const router = express.Router();

import headStagesRouter from './headStages';


router.use("/headstages", headStagesRouter)

export default router;