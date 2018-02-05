
var express = require('express');
var app = express();
var fs = require('fs');
var http = require('http');
var https = require("https");

var os = require('os');

var firebase = require("firebase");

var API_KEY = "AIzaSyAGb7z9IMTfFdZyt1HbBY6_NqWESfC91Tw"; // kay for web
var admin = require("firebase-admin");

var serviceAccount = require("./fireBaseKey/fairy-tales-kay.json");

var APP = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fairy-tales-d7dde.firebaseio.com"
});


// console.log(APP);





//console.log(os.cpus() + "  above main ");
console.log((os.totalmem()/1024) + "   above totalmem main");
console.log((os.freemem()/1024) + "   above freemem main");


/*fs.readFile('./public/index.html', function (err, html) {
 if (err) {
 throw err;
 }
 http.createServer(function (request, response) {
 response.writeHeader(200, {"Content-Type": "text/html"});
 response.write(html);
 response.end();
 }).listen(4000);
 console.log('Example app listening on port 4000!');
 }); //fs.readFile

 */