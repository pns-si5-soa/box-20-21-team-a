import express = require('express');

const router = express.Router();

import weatherRouter from './weather'

router.use("/weather", weatherRouter)

export default router;