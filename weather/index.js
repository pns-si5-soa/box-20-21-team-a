const express = require('express')
const app = express()
const port = 3000

const weather = ["Sunny", "Cloudy", "Rainy"]

function choice(tab) {
    return tab[Math.floor(Math.random() * Math.floor(tab.length))]
}

app.get('/weather', (req, res) => {
  res.send(choice(weather))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})