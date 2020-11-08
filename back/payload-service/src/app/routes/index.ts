import express = require('express');
import payloads from './payloads';

const router = express.Router();


router.use("/payloads", payloads)

export default router;


