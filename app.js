var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var cookieSession = require('cookie-session')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
const passport = require('passport')
require('./passport')
var app = express();

app.use(cookieSession({
  name: 'session',
  keys: ['chala'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
  origin: "http://localhost:3000",
  methods: "POST, GET, DELETE, PUT",
  credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
