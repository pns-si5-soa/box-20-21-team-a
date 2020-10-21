import express = require('express');
const router = express.Router();
import boosterRouter from "./booster";
import rocketRouter from "./rocket";
import payloadRouter from "./payload";

router.use("/booster", boosterRouter);
router.use("/rocket", rocketRouter);
router.use("/payload", payloadRouter);

export default router;