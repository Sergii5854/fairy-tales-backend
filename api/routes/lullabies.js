const express = require('express');
const fairyTale = require('./../model');
const router = express.Router();

router.get('/lullabies', (req, res, next) => {
    fairyTale.find({})
        .then(function (lullabiesFairyTales) {
            res.json({lullabiesFairyTales})
        }).catch(next)
})

router.get('/lullabies/:id', (req, res, next) => {
  fairyTale.find({})
      .then(function (lullabiesFairyTales) {
          res.json({lullabiesFairyTales})
      }).catch(next)
});

