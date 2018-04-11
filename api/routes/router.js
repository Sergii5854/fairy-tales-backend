const express = require('express');
const fairyTale = require('./../models/fairyTale');

const router = express.Router();

router.get('/fairytales', (req, res, next) => {
    fairyTale.find({})
        .select("name")
        .select("id")
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
        .select("name")
        .select("id")
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
        .select("name")
        .select("id")
        .select("author")
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
        .select("name")
        .select("id")
        .select("author")
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
        .select("name")
        .select("id")
        .select("lullaby")
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


module.exports = router
