const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/sarai', {useNewUrlParser: true, useUnifiedTopology: true })

// register the models
require('./models/WeatherOutlook')

require('./routes')(app)


app.listen(4000)