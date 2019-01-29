var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var port = 9000;
var bodyParser = require('body-parser');

// support parsing of application/json type post data
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));
// app.set('view engine', 'html');
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/login',(req, res) => {
    res.sendFile(__dirname +'/client.html');
});

app.post("/add",function(req,res) {
    console.log(req.body.Name)
    res.json({success:true, message:req.body.Name})
})
 
app.listen(9000,(req,res) =>
    console.log("enter localhost:9000/read in postman")
)