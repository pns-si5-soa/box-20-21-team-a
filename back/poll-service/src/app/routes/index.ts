import express = require('express');

const router = express.Router();

import pollrouter from "./poll"

router.use("/poll", pollrouter)

export default router;