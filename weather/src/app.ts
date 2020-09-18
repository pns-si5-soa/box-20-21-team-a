import express = require('express')
const app: express.Application = express()
const port = 3000

const weather = ["Sunny", "Cloudy", "Rainy"]

function choice(tab: Array<String>): String {
    return tab[Math.floor(Math.random() * Math.floor(tab.length))]
}

app.get('/weather', (req, res) => {
  res.send(choice(weather))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  if(process.env.CI !== undefined) process.exit(0)
})