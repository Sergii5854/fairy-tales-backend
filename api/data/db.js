var firebase = require('firebase');
var serviceAccount = require("../../fireBaseKey/fairy-tales-kay.json");
var express = require('express');
var router = express.Router();
firebase.initializeApp({
    "serviceAccount": serviceAccount,
    "databaseURL": "https://fairy-tales-d7dde.firebaseio.com"
});

var ref = firebase.app().database().ref();
var usersRef = ref.child('users');

var tailsRef = ref.child('talesList');
// console.log(tailsRef);

tailsRef.orderByKey().on('child_added', function (data) {
    console.log(data.getKey(), data.val().name);
});


// router.get('/all', function (req, res, next) {
//     console.log("all rout")
//     functionThatUsesFirebase(req.params.id);
//
//     res.send(req.params.id);
// })


// var delayedPush = function (user) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       usersRef.push(user)
//           .then(resolve, reject);
//     }, 1);
//   });
// };
//
// delayedPush({
//   name: 'First User',
//   time: (new Date()).getTime()
// })
//     .then(function() {
//       return delayedPush({
//         name: 'Second User',
//         time: (new Date()).getTime()
//       });
//     })
//     .then(function() {
//       return delayedPush({
//         name: 'Third User',
//         time: (new Date()).getTime()
//       });
//     })
//     .then(function() {
//       usersRef.orderByKey().on('child_added', function(snap) {
//         console.log(snap.getKey(), snap.val());
//       });
//     })
//     .catch(function(err) {
//       console.log('error', err);
//     });
