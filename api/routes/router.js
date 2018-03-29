const express = require('express');
const fairyTale = require('./../models/fairyTale');
const fairyTaleList = require('./../models/modelList');
const User = require('./../models/user')
const bcrypt = require('bcrypt')


const router = express.Router();

// require('./audio');
// require('./author');
// require('./favorite');
// require('./folk');
// require('./lullabies');
// require('./recent-uploaded');

router.get('/fairytales', (req, res, next) => {
    fairyTale.find({})
        .then(function (fairytales) {
            res.json({fairytales})
        }).catch(next)
});

router.get('/fairytales/:id', (req, res, next) => {
    let id = +req.params.id;
    fairyTale.find({ id: id })
        .then(function (fairytales) {
        res.json({fairytales})
    }).catch(next)
});

router.post('/fairytales', (req, res, next) => {
    new fairyTale(req.body.fairytale)
        .save()
        .then(function (fairytale) {
            res.json({fairytale})
        })
        .catch(next)
});

router.put('/fairytales/:id', function (req, res) {
    fairyTale.findById(req.params.id, function (err, fairyTale) {
        fairyTale.audioUrl = req.body.fairyTale.audioUrl || fairyTale.audioUrl;
        fairyTale.createTime = req.body.fairyTale.createTime || fairyTale.createTime;
        fairyTale.id = req.body.fairyTale.id || fairyTale.id;
        fairyTale.imageUrl = req.body.fairyTale.imageUrl || fairyTale.imageUrl;
        fairyTale.lullaby = req.body.fairyTale.lullaby || fairyTale.lullaby;
        fairyTale.text = req.body.fairyTale.text || fairyTale.text;
        fairyTale.updateTime = req.body.fairyTale.updateTime || fairyTale.updateTime;
        fairyTale.updated = req.body.fairyTale.updated || fairyTale.updated;

        fairyTale.save(function (err, fairyTale) {
            if (err) {
                res.status(400).json(err)
            }
            res.status(200).json(fairyTale)
        })
    })

});

router.delete('/fairytales/:id', function (req, res) {
    var id = req.params.id;
    fairyTale.remove({
        _id: id
    }, function () {
        res.json()
    })
});

// audio-fairy-tales

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


//author
router.get('/author', (req, res, next) => {
    fairyTale
        .find({ author: { $exists: true } })
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

//folk

router.get('/folk', (req, res, next) => {
    fairyTale
        .find({ author: { $exists: false } })
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
// lullabies
router.get('/lullabies', (req, res, next) => {
    fairyTale
        .find({lullaby: true})
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


router.get('/users', (req, res, next) => {
  User.find()
        .then(users => {
          res.json({users})
        })
        .catch(next)
})

router.post('/login',
    async function (req, res, next) {
      if (!req.body.user.password || !req.body.user.email) {
        res.json({'status': 404, 'message': 'Not Found.'})
      }
      let user = await User.findOne({email: req.body.user.email})
        .then(user => user)

      if (!user) {
        res.json({'status': 404, 'message': 'Not Found.'})
      }

      bcrypt.compare(req.body.user.password, user.password, function (err, result) {
        if (result === true) {
          res.json({'user': {'_id': user._id, 'email': user.email, 'name': user.name}})
        } else {
          res.json({'status': 404, 'message': 'Not Found.'})
        }
      })
    })

router.post('/users', (req, res, next) => {
  let data = req.body.user

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(data.password, salt, function (err, hash) {
      data.password = hash
      new User(data)
            .save()
            .then(user => {
              res.json({user})
            })
            .catch(next)
    })
  })
})



module.exports = router
