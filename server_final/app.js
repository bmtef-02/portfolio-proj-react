var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const config = require('./config');
const passport = require('passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const projectRouter = require('./routes/projectRouter');
const seedRouter = require('./routes/seed');

// const uri = config.mongoUrl
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const url = config.mongoUrl;

const connect = mongoose.connect(url, {
  keepAlive: 1,
  connectTimeoutMS: 30000,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

connect.then(() => console.log('Connected correctly to db'),
  err => console.log(err)
);

var app = express();

app.all('*', (req, res, next) => {
  if (req.secure) {
    return next();
  } else {
    console.log(`Redirecting to: https://${req.hostname}: ${app.get('secPort')}${req.url}`);
    res.redirect(301, `https://${req.hostname}:${app.get('secPort')}${req.url}`);
  }
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/projects', projectRouter);
app.use('/seed', seedRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  console.log('Error Message: ',err.message)
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// app.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

module.exports = app;
