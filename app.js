const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()
const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World! ==>'+process.env.teste)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})