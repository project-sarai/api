const mongoose = require('mongoose')
const WeatherOutlook = mongoose.model('WeatherOutlook')

exports.homepage = (req, res) => {
  res.end()
}

exports.findAll = (req, res) => {
  WeatherOutlook.find({ }, (err, results) => {
    res.send(results)
  })
}