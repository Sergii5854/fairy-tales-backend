const express = require('express');
const fairyTale = require('./../model');
const router = express.Router();

router.get('/beloved', (req, res, next) => {
    fairyTale.find({})
        .then(function (favorites) {
            res.json({favorites})
        }).catch(next)
})

router.get('/beloved/:id', (req, res, next) => {
  fairyTale.find({})
      .then(function (favorites) {
          res.json({favorites})
      }).catch(next)
});

