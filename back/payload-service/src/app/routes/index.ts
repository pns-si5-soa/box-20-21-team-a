import express = require('express')
import Payload from '../aggregate/Payload';
const router = express.Router(); 
import payloads from './payloads';


router.use("/payloads", payloads)

export default router;


