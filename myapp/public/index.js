const express = require('express')
const app = express()
const fs = require("fs")
const port = 3000

var user = {
	"user4" : {
		"name" : "Ganesh",
		"password" : "password4",
		"profession" : "designer",
		"id" : "4"
	}
}

/*app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))*/

app.get('/nodejs', function(req,res){
	res.send("I am gonna rock")
});

app.get('/nodejs1', function(req,res){
	res.send("We are gonna rock")
});

/*Reading the contents in the database and sending to the client*/
app.get('/read',function(req,res) {
	fs.readFile(__dirname + "/" + "database.json", 'utf8', function(err,data) {
		console.log(data)
		//res.end(data)
		data = JSON.parse(data)
		data.user1.name = "Payal"
		data = JSON.stringify(data)
		res.end(data)
	})
})

/*Adding the content to the database*/
app.post('/add',function(req,res) {
		fs.readFile(__dirname + "/" + "database.json", 'utf8', function(err,data) {
			console.log(data);
			data = JSON.parse(data);
			data["user4"] = user["user4"];
			res.end(JSON.stringify(data));
	});
})

/*Deleting the content present in the database*/
app.delete('/delete',(req,res) => 
	fs.readFile(__dirname + "/" + "database.json", 'utf8',function(err,data) { 
		res.write("Before deleting")
		res.write(data)
		res.write("After deleting")
		data = JSON.parse(data)
		delete data["ramesh"]
		res.json(data)
		//res.end(JSON.stringify(data))
	})
)

/*Middleware function*/



app.listen(3000, function(){
	console.log("Go and enter localhost:8000/API name in browser")
});


