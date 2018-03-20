const express = require('express');
const fairyTale = require('./../model');

const audio = express.Router();

audio.get('/audio-fairy-tales', (req, res, next) => {
    fairyTale.find({})
        .then(function (audioFairyTales) {
            res.json({audioFairyTales})
        }).catch(next)
})

audio.get('/audio-fairy-tales/:id', (req, res, next) => {
  fairyTale.find({})
      .then(function (audioFairyTales) {
          res.json({audioFairyTales})
      }).catch(next)
});

module.exports = audio
