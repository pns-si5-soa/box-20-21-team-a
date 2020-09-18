import express = require('express')
require('dotenv').config()
const app: express.Application = express()
const port = process.env.PORT

const rocket_status = ["ready", "not ready"]

function choice(tab: Array<String>): String {
    return tab[Math.floor(Math.random() * Math.floor(tab.length))]
}

app.get('/rocket', (req, res) => {
  res.send(choice(rocket_status))
})

app.listen(port, () => {
  console.log(`Rocket : Listening at http://localhost:${port}`)
    if(process.env.CI !== undefined) process.exit(0)
})