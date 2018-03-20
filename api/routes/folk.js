
router.get('/folk', (req, res, next) => {
    fairyTale.find({})
        .then(function (folkFairyTales) {
            res.json({folkFairyTales})
        }).catch(next)
})

router.get('/folk/:id', (req, res, next) => {
  fairyTale.find({})
      .then(function (folkFairyTales) {
          res.json({folkFairyTales})
      }).catch(next)
});
