const express = require('express');
const fairyTale = require('./../model');

const favorite = express.Router();

favorite.get('/beloved', (req, res, next) => {
    fairyTale.find({})
        .then(function (favorites) {
            res.json({favorites})
        }).catch(next)
})

favorite.get('/beloved/:id', (req, res, next) => {
  fairyTale.find({})
      .then(function (favorites) {
          res.json({favorites})
      }).catch(next)
});

module.exports = favorite
