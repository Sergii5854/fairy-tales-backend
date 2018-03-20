const express = require('express');
const fairyTale = require('./../model');

const folk = express.Router();

folk.get('/folk', (req, res, next) => {
    fairyTale.find({})
        .then(function (folkFairyTales) {
            res.json({folkFairyTales})
        }).catch(next)
})

folk.get('/folk/:id', (req, res, next) => {
  fairyTale.find({})
      .then(function (folkFairyTales) {
          res.json({folkFairyTales})
      }).catch(next)
});

module.exports = folk
