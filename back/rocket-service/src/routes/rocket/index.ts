import rocketService from "../../services/rocket-service";
import express = require('express')
const router = express.Router();

router.get('/rocket', (req, res) => {
    res.send(rocketService.getStatus());
  })
  
router.post('/rocket/launch', (req, res) => {
res.send(rocketService.launch());
})

export default router;