var express = require('express');
var app = express();
var fs = require('fs');
var jwt = require('jsonwebtoken');
var port = 8000;
var token;
var path = require('path');
var bodyParser = require('body-parser');

// support parsing of application/json type post data
app.use(bodyParser.json());

/*
 * support parsing of application/x-www-form-urlencoded post data
 */
app.use(bodyParser.urlencoded({ extended: true }));

/* 
 * Validating the user and generating the token and sending the same to the user 
 */
app.post('/read',(req,res) =>
    fs.readFile(__dirname + "/" + "database1.json", function(err,data) {
        data = JSON.parse(data);
        console.log(data.yogi.name)
        if(req.body.name != data.yogi.name) {
            res.status(200).end("Authentication failed");
        } else { 
            token = jwt.sign({name:"Yogaraju"},"SecretCode");
            console.log(token);
            res.send(token);
        }
    })
)

/*  */
app.get('/get',function(req,res) {
    if(!(jwt.verify(req.body.token,"SecretCode"))) {
        res.end("Failed");
    } else {
        res.sendFile(path.join(__dirname + '/car_object.html'));
        res.write("You are the best client so far");
        res.end();
    }
})

app.listen(8000,(req,res) =>
    console.log("enter localhost:8000/read in postman")
)