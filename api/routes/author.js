

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

