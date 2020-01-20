
const controller = require('./controller')

module.exports = (app) => {
  app.get('/', controller.homepage)
  app.get('/find-all', controller.findAll)
}