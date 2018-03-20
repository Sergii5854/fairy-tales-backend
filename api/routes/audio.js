const express = require('express');
const fairyTale = require('./../model');
const router = express.Router();

router.get('/audio-fairy-tales', (req, res, next) => {
    fairyTale.find({})
        .then(function (audioFairyTales) {
            res.json({audioFairyTales})
        }).catch(next)
})

router.get('/audio-fairy-tales/:id', (req, res, next) => {
  fairyTale.find({})
      .then(function (audioFairyTales) {
          res.json({audioFairyTales})
      }).catch(next)
});


