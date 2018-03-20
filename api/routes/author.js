
const express = require('express');
const fairyTale = require('./../model');
const router = express.Router();

router.get('/author', (req, res, next) => {
    fairyTale.find({})
        .then(function (authors) {
            res.json({authors})
        }).catch(next)
})

router.get('/author/:id', (req, res, next) => {
  fairyTale.find({})
      .then(function (authors) {
          res.json({authors})
      }).catch(next)
});

