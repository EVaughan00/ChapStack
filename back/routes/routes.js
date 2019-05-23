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
    User.findOne({email: email, password: pass, type: 'default'}, function (e, user) {
      if (user!=null) {
        auth = true
        res.send({authenticated: true})
      } else {
        res.send({authenticated: false})
      }
    })
  })

  app.post('/register', (req, res) => {
    var email = req.body.email
    var pass = req.body.password
    res.send('Added user ' + email)
    var newUser = new User({
      email: email,
      password: pass,
      type: 'default'
    })
    newUser.save(function (error) {
        if (error) {
          console.log(error)
        }
      })
  })

  app.post('/signup', (req, res) => {
    var email = req.body.email
    var name = req.body.name
    var type = req.body.type
    console.log(email)
    if (email) {
      User.findOne({email: email}, function (err, user) {
        if (user) {
          console.log('User already exists')
        } else {
          console.log('Creating new user: ' + email)
          var newUser = new User({
            email: email,
            name: name,
            type: type
          })
          newUser.save(function (error) {
              if (error) {
                console.log(error)
              }
            })
        }
      })
      res.send({name: name, email: email})
    } else {
      console.log('Could not authenticate')
    }
  })

  app.get('/Users', (req, res) => {
    User.find({}, function (err, user) {
      const person = user
      res.send('Users are: ' + person)
    })
  })
}
