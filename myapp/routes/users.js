var express = require('express');
var router = express.Router();
let User = require('../model/userSchema');

/* 
 * GET users listing. 
 */
router.get('/', function(req, res, next) {
  // Render the user page
  res.sendFile(__dirname + "/client1.html");
});

/*
 * Recevive the data from the user and add it to the database
 */
router.post('/testAdd', function(req,res) {
  console.log("I am in testAdd API")
  let user1 = new User({Name : req.body.Name, Domain : req.body.Domain});
  user1.save((err, data) => {
    if(!err) {
      res.send('data added');
      console.log(user1)
    } else {
      res.json(err);
    }
  });
});

/* 
 * Delete the user specified data from the db
 */ 
router.delete('/delete', function(req,res) {
  console.log("I am in delete API")
  User.findOneAndDelete({Name :req.body.Name, Domain : req.body.Domain}, function(err,data) {
    if(!err) {
      res.send('dataexported');
    } else {
      res.json(err);
    }
  });
});


router.get("/display", (req, res) => {
  User.find({}, function(err, docs){
    if(err) {
      res.json(err);
    } else {  
      console.log(docs);
      res.render('index2', { title : docs });
    }
	});
});

module.exports = router;
