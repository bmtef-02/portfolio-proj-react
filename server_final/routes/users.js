var express = require('express');
const User = require('../models/user');
const passport = require('passport');
const authenticate = require('../authenticate');
const cors = require('./cors');
var router = express.Router();

/* GET users listing. */
router.get('/', cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, function(req, res, next) {
  User.find()
  .then(users => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
  })
  .catch(err => next(err));
});

router.post('/signup', cors.corsWithOptions, function(req, res, next) {
  User.findOne({ email: req.body.email })
  .then(user => {
    if(user) {
      console.log(user);
      res.statusCode = 200;
      res.send(`${user.email} already has an account`);
    } else {
      User.register(
        new User({username: req.body.username, email:req.body.email, firstname: req.body.firstname, lastname: req.body.lastname}), req.body.password, (err, user) => {
          if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({err: err});
          } else {
            user.save(err => {
              if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.json({ err: err});
                return;
              }
              passport.authenticate('local')(req, res, () => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({success: true, status: 'Registration Successful!'});
              })
            })
            }
          }
      )
    }  
  });
})

// THIS IS NOT WORKING - RES.BODY COMES BACK UNAUTHORIZED
router.post('/login', cors.corsWithOptions, passport.authenticate('local'), (req, res) => {
    const token = authenticate.getToken({_id: req.user._id});   // issue a token to the user
    console.log("Token: " + token);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, token: token, status: 'You are successfully logged in!'});
});

// HAVE NOT TESTED THIS YET
router.get('/logout', cors.corsWithOptions, (req, res, next) => {
    
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
