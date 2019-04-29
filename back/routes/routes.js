const authController = require('../controllers/authController')
const User = require('../models/user')

module.exports = (app) => {
  app.get('/login', (req, res) => {
    res.send('Reached successfully')
  })

  app.post('/register/:user', (req, res) => {
    var user = req.params.user
    res.send('Added user ' + user)
    var newUser = new User({
      name: user
    })
    newUser.save(function (error) {
        if (error) {
          console.log(error)
        }
      })
  })

  app.get('/Users', (req, res) => {
    User.find({}, function (err, user) {
      const person = user
      res.send('Users are: ' + person)
    })
  })
}
