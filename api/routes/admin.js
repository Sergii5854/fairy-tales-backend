const fairyTaleAdminAdmin = require('./../models/user')

const express = require('express');


const admin = express.Router();

// admin

admin.get('/fairytales-admin', (req, res, next) => {
    fairyTaleAdmin.find({})
        .then(function (fairytales) {
            res.json({fairytales})
        }).catch(next)
});

admin.get('/fairytales-admin/:id', (req, res, next) => {
    let id = +req.params.id;
    fairyTaleAdmin.find({ id: id })
        .then(function (fairytales) {
            res.json({fairytales})
        }).catch(next)
});

admin.post('/fairytales-admin/:id', (req, res, next) => {
    new fairyTaleAdmin(req.body.fairytale)
        .save()
        .then(function (fairytale) {
            res.json({fairytale})
        })
        .catch(next)
});

admin.put('/fairytales-admin/:id', function (req, res) {
    fairyTaleAdmin.findById(req.params.id, function (err, fairyTaleAdmin) {
        fairyTaleAdmin.audioUrl = req.body.fairyTaleAdmin.audioUrl || fairyTaleAdmin.audioUrl;
        fairyTaleAdmin.createTime = req.body.fairyTaleAdmin.createTime || fairyTaleAdmin.createTime;
        fairyTaleAdmin.id = req.body.fairyTaleAdmin.id || fairyTaleAdmin.id;
        fairyTaleAdmin.imageUrl = req.body.fairyTaleAdmin.imageUrl || fairyTaleAdmin.imageUrl;
        fairyTaleAdmin.lullaby = req.body.fairyTaleAdmin.lullaby || fairyTaleAdmin.lullaby;
        fairyTaleAdmin.text = req.body.fairyTaleAdmin.text || fairyTaleAdmin.text;
        fairyTaleAdmin.updateTime = req.body.fairyTaleAdmin.updateTime || fairyTaleAdmin.updateTime;
        fairyTaleAdmin.updated = req.body.fairyTaleAdmin.updated || fairyTaleAdmin.updated;

        fairyTaleAdmin.save(function (err, fairyTaleAdmin) {
            if (err) {
                res.status(400).json(err)
            }
            res.status(200).json(fairyTaleAdmin)
        })
    })

});

admin.delete('/fairytales-admin/', function (req, res) {
    var id = req.params.id;
    fairyTaleAdmin.remove({
        _id: id
    }, function () {
        res.json()
    })
});

module.exports = admin
