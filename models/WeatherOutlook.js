const mongoose = require('mongoose')

const WeatherOutlookSchema = new mongoose.Schema(
  {
   region: String,
   province: String,
   municipality: String,
   data: {
    month: {
      Jan: String,
      Feb: String,
      Mar: String,
      Apr: String,
      May: String,
      Jun: String,
      Jul: String,
      Aug: String,
      Sept: String,
      Oct: String,
      Nov: String,
      Dec: String,
    }
   }
  })

mongoose.model('WeatherOutlook', WeatherOutlookSchema, 'weather-outlook')