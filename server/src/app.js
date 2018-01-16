console.log('test')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  var tst = 'User registered -> ' + req.body.email

  res.send({
    message: tst
  })
})

app.get('/status', (req, res) => {
  res.send({
    message: 'helloooo'
  })
})
app.listen(process.env.PORT || 8081)
