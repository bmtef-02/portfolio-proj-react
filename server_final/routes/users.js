var express = require('express');
const User = require('../models/user');
const passport = require('passport');
const authenticate = require('../authenticate');
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

        // NOT SURE WHERE TO PUT THIS???

        // passport.authenticate('local')(req, res, () => {
        //     res.statusCode = 200;
        //     res.setHeader('Content-Type', 'application/json');
        //     res.json({success: true, status: 'Registration Successful!'});
        // })

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
});

// THIS IS NOT WORKING - RES.BODY COMES BACK UNAUTHORIZED
router.post('/login', passport.authenticate('local'), (req, res) => {
    const token = authenticate.getToken({_id: req.user._id});   // issue a token to the user
    console.log(token);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, token: token, status: 'You are successfully logged in!'});
});

// HAVE NOT TESTED THIS YET
router.get('/logout', (req, res, next) => {
    
    // checks if a session exists
    if (req.session) {

        // deleting session server side
        req.session.destroy();

        // clear the cookie stored on the client
        res.clearCookie('session-id');

        // redirects user to route path localhost:3000/
        res.redirect('/');
    } else {    // if user is trying to logout without being logged in
        const err = new Error('You are not logged in!');
        err.status = 401;
        return next(err);
    }
});

module.exports = router;
