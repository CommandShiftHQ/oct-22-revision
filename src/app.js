const express = require('express')
const logger = require('./middleware/logger')
const bodyParser = require('./middleware/body-parser')
const artistRouter = require('./routes/artist')

const app = express()
app.use(logger)
app.use(bodyParser)

app.use('/artists', artistRouter)

module.exports = app
