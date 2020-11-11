import express = require('express');

const router = express.Router();

import weather from "../../services/weather-service"

router.get('/', (req, res) => {
    res.send(weather());
});

export default router;