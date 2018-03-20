const express = require('express');
const fairyTale = require('./../model');
const router = express.Router();

const audio = require('./audio');
const author = require('./author');
const favorite = require('./favorite');
const folk = require('./folk');
const lullabies = require('./lullabies');
const recentUploaded = require('./recent-uploaded');


router.get('/fairytales', (req, res, next) => {
    fairyTale.find({})
        .then(function (fairyTales) {
            res.json({fairyTales})
        }).catch(next)
})

router.post('/fairytales', function (req, res, next) {
    new fairyTale(req.body.fairyTale)
        .save()
        .then(function (fairyTale) {
            res.json({fairyTale})
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

audio;
author;
favorite;
folk;
lullabies;
recentUploaded;

module.exports = router
