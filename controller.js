const mongoose = require('mongoose')
const WeatherOutlook = mongoose.model('WeatherOutlook')

exports.homepage = (req, res) => {
  res.send('API home /')
}

exports.findAll = (req, res) => {
  WeatherOutlook.find({ }, (err, results) => {
    console.log(results)
    res.send(results)
  })
}