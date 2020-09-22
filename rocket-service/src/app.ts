import express = require('express')
import rocketService from "./rocket-service"
require('dotenv').config()
const app: express.Application = express()
const port = process.env.PORT ?? 3000



app.get('/rocket', (req, res) => {
  res.send(rocketService.getStatus())
})

app.post('/rocket/launch', (req, res) => {
  res.send(rocketService.launch())
})

app.listen(port, () => {
  console.log(`Rocket : Listening at http://localhost:${port}`)
    if(process.env.CI !== undefined) process.exit(0)
})