var config = require('./config')

var firebase = require("firebase");


var admin = require("firebase-admin");

var serviceAccount = require("./fireBaseKey/fairy-tales-kay.json");

var APP = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fairy-tales-d7dde.firebaseio.com"
});


// console.log(APP);

