const express = require('express');
const User = require('./../models/user')
const bcrypt = require('bcrypt')

const router = express.Router();


router.get('/users', (req, res, next) => {
    User.find()
        .then(users => {
            res.json({users})
        })
        .catch(next)
});

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
    });

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
});



module.exports = router;