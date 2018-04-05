const express = require('express');
const path = require('path')
const app = express();

const config = require('./config');
const router = require('./api/routes/router');
const user = require('./api/routes/user')
const admin = require('./api/routes/admin')
const bodyParser = require('body-parser');

const db = require('./api/db');
app.listen(config.port, function () {
  console.log(`Server running at port: ${config.port}`)
});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());

app.use('/api/v1', router);
app.use('/api/v1', user);
app.use('/api/v1', admin);

app.route('/*').get(function(req, res) {
    return res.sendFile(path.join(config.root, 'index.html'));
});


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
