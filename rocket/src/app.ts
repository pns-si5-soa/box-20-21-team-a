import express = require('express')
const app: express.Application = express()
const port = 3001

const rocket_status = ["ready", "not ready"]

function choice(tab: Array<String>): String {
    return tab[Math.floor(Math.random() * Math.floor(tab.length))]
}

app.get('/rocket', (req, res) => {
  res.send(choice(rocket_status))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
    if(process.env.CI !== undefined) process.exit(0)
})