const express = require('express');
const fairyTale = require('./../model');

const lullabies = express.Router();

lullabies.get('/lullabies', (req, res, next) => {
    fairyTale.find({})
        .then(function (lullabiesFairyTales) {
            res.json({lullabiesFairyTales})
        }).catch(next)
})

lullabies.get('/lullabies/:id', (req, res, next) => {
  fairyTale.find({})
      .then(function (lullabiesFairyTales) {
          res.json({lullabiesFairyTales})
      }).catch(next)
});

module.exports = lullabies
