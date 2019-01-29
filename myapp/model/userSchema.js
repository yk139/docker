//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
    Name : {
        type : String,
        required : true
    },
    Domain : String
});

let User = mongoose.model('user', userSchema );
module.exports = User;