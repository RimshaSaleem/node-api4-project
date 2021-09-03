require("dotenv").config()
const express = require('express')
const cors = require('cors')

 console.log(process.env.USER)
 console.log(process.env.HOME)
console.log(process.env.PORT)
const PORT = process.env.PORT || 4000

const server = express()

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
  res.send(`<h1>Web 45 ROCKS!<br><br>
   Rimsha</h1>`)
})

server.get('/api', (req, res) => {
  res.json({ message: 'Web 45 is awesome!' })
})
server.get('/api/:id', (req, res) => {
    res.json({ message: 'Welcome to this new world' })
  })

server.listen(process.env.PORT, () => {
  console.log(`listening on port ${PORT}`)
})
