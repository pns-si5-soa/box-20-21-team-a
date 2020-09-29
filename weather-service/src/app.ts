import express = require('express')
import weather from "./weather-service"

require('dotenv').config()
const app: express.Application = express();
const port = process.env.PORT ?? 3001;


app.get('/weather', (req, res) => {
    res.send(weather());
});

app.listen(port, () => {
    console.log(`Weather : Listening at http://localhost:${port}`);
    if (process.env.CI !== undefined) {
        process.exit(0);
    }
});