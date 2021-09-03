const express = require('express')
const cors = require('cors')

console.log(process.env.USER)
console.log(process.env.HOME)
console.log(process.env.PORT)

const server = express()

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
  res.send(`<h1>Web 45 ROCKS!</h1>`)
})

server.get('/api', (req, res) => {
  res.json({ message: 'Web 45 is awesome!' })
})

server.listen(4000, () => {
  console.log(`listening on port 4000`)
})
