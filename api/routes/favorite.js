
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

