const express = require('express');
const fairyTale = require('./../model');

const RecentUploaded = express.Router();

RecentUploaded.get('/recent-uploaded', (req, res, next) => {
    fairyTale.find({})
        .then(function (RecentUploadedFairyTales) {
            res.json({RecentUploadedFairyTales})
        }).catch(next)
})

RecentUploaded.get('/recent-uploaded/:id', (req, res, next) => {
  fairyTale.find({})
      .then(function (RecentUploadedFairyTales) {
          res.json({RecentUploadedFairyTales})
      }).catch(next)
})

module.exports = RecentUploaded
