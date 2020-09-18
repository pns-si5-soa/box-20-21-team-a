import express = require('express')
require('dotenv').config()
const app: express.Application = express()
const port = process.env.PORT ?? 3001;

const weather = ["Sunny", "Cloudy", "Rainy"]

function choice(tab: Array<String>): String {
    return tab[Math.floor(Math.random() * Math.floor(tab.length))]
}

app.get('/weather', (req, res) => {
  res.send(choice(weather))
})

app.listen(port, () => {
  console.log(`Weather : Listening at http://localhost:${port}`)
  if(process.env.CI !== undefined) process.exit(0)
})