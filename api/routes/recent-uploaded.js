
router.get('/recent-uploaded', (req, res, next) => {
    fairyTale.find({})
        .then(function (RecentUploadedFairyTales) {
            res.json({RecentUploadedFairyTales})
        }).catch(next)
})

router.get('/recent-uploaded/:id', (req, res, next) => {
  fairyTale.find({})
      .then(function (RecentUploadedFairyTales) {
          res.json({RecentUploadedFairyTales})
      }).catch(next)
})
