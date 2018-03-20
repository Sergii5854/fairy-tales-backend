const express = require('express');
const fairyTale = require('./../model');

const author = express.Router();

author.get('/author', (req, res, next) => {
    fairyTale.find({})
        .then(function (authors) {
            res.json({authors})
        }).catch(next)
})

author.get('/author/:id', (req, res, next) => {
  fairyTale.find({})
      .then(function (authors) {
          res.json({authors})
      }).catch(next)
});

 module.exports = author
