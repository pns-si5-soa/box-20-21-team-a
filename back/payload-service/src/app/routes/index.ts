import express = require('express')
import Payload from '../entities/Payload';
const router = express.Router(); 
const payload = new Payload();

router.get("/",function(req,res){
    payload.detach();
    res.send("SUCCESS");
});
export default router;


