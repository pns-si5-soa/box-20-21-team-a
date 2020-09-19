import express = require('express')
import choice from "./rocket"
require('dotenv').config()
const app: express.Application = express()
const port = process.env.PORT ?? 3000



app.get('/rocket', (req, res) => {
  res.send(choice())
})

app.listen(port, () => {
  console.log(`Rocket : Listening at http://localhost:${port}`)
    if(process.env.CI !== undefined) process.exit(0)
})