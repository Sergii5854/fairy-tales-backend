const fairyTale = require('./../models/fairyTale');

const express = require('express');


const admin = express.Router();

// admin

admin.get('/fairytales-admin', (req, res, next) => {
    fairyTale.find({})
        .select("name")
        .select("id")
        .then(function (fairytales) {
            res.json({fairytales})
        }).catch(next)
});

admin.get('/fairytales-admin/:id', (req, res, next) => {
    let id = +req.params.id;
    fairyTale.find({ id: id })
        .then(function (fairytales) {
            res.json({fairytales})
        }).catch(next)
});

admin.post('/fairytales-admin/:id', (req, res, next) => {
    new fairyTale(req.body.fairytale)
        .save()
        .then(function (fairytale) {
            res.json({fairytale})
        })
        .catch(next)
});

admin.put('/fairytales-admin/:id', function (req, res) {
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

admin.delete('/fairytales-admin/', function (req, res) {
    var id = req.params.id;
    fairyTale.remove({
        _id: id
    }, function () {
        res.json()
    })
});

module.exports = admin
