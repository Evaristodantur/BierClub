"use strict";

// Requerimiento de modulos
var createError = require('http-errors');

var express = require('express');

var path = require('path');

var cookieParser = require('cookie-parser');

var logger = require('morgan');

var methodOverride = require('method-override');

var session = require('express-session'); //Middlewares generales


var cookieAuthMiddleware = require('./middlewares/cookieAuthMiddleware'); // Requerimiento de routes principales de la pagina


var indexRouter = require('./routes/main');

var usersRouter = require('./routes/users');

var productsRouter = require('./routes/products');

var cartsRouter = require('./routes/carts');

var app = express(); // view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // Uso de modulos en toda la pagina

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express["static"](path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(session({
  secret: 'super secreto'
}));
app.use(cookieAuthMiddleware); // Uso de routes principales de la pagina

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/carts', cartsRouter); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  next(createError(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error', {
    userLogged: req.session.usuarioLogueado
  });
});
module.exports = app;