var express = require('express');
const User = require('../models/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find()
  .then(users => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
  })
  .catch(err => next(err));
});

router.post('/signup', function(req, res, next) {
  User.findOne({ email: req.body.email })
  .then(user => {
    if(user) {
      console.log(user);
      res.statusCode = 200;
      res.send(`${user.email} already has an account`);
    } else {
      User.findOne( { username: req.body.username })
      .then(user => {
        if(user) {
          console.log(user);
          res.statusCode = 200;
          res.send(`Username: ${user.username} is taken`)
      } else {
        User.create({
          username: req.body.username,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          password: req.body.password
        })
        .then(user => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(user);
        })
        .catch(err => next(err));
      }
      })
      .catch(err => next(err));
    }
  })
  .catch(err => next(err));
})

module.exports = router;
