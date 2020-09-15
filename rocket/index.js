const express = require('express')
const app = express()
const port = 3001

const rocket_status = ["ready", "not ready"]

function choice(tab) {
    return tab[Math.floor(Math.random() * Math.floor(tab.length))]
}

app.get('/rocket', (req, res) => {
  res.send(choice(rocket_status))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})