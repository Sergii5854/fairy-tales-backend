var express = require('express');
var path = require('path')
var app = express();


const config = require('./config');
const router = require('./api/router');

// var db = require('./api/data/db');
var db = require('./api/db');
app.listen(config.port, function () {
  console.log(`Server running at port: ${config.port}`)
});


app.use('/api/v1', router);

// error handling
app.use(function (req, res, next) {
  const err = new Error(`Not Found ${req.path}`);
  err.status = 404;
  next(err)
});
app.use(function (error, req, res, next) {
  if (error) {
    console.log(error);
    return res.status(400).json({error})
  }
  next(error)
});
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
});




module.exports = app;
