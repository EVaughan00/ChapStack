const authController = require('../controllers/authController')
const User = require('../models/user')

module.exports = (app) => {
  app.get('/login', (req, res) => {
    res.send('Reached successfully')
  })

  app.post('/login', (req, res) => {
    var email = req.body.email
    var pass = req.body.password
    var auth = false
    console.log(email)
    User.findOne({email: email, password: pass}, function (e, user) {
      if (user!=null) {
        auth = true
        res.send({authenticated: auth})
      } else {
        res.send({authenticated: auth})
      }
    })
  })

  app.post('/register', (req, res) => {
    var email = req.body.email
    var pass = req.body.password
    res.send('Added user ' + email)
    var newUser = new User({
      email: email,
      password: pass
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
