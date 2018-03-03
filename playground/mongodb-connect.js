const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
	if(err){
		console.log("Unable to connect to mongodb server");
	}
	console.log("Connected to mongodb server");
    var db =  db.db("TodoApp");
	db.collection("Todos").insertOne({
		text: "some text",
		completed: false
	}, (err, results) => {
    	if(err){
			console.log("Unable to insert to mongodb server");
	    }
	    console.log(results.ops);
	})

	db.collection("Users").insertOne({
		name: "Andrew",
		age: 27,
		location: "america"
	}, (err, results) => {
		if(err){
			console.log("Unable to insert to mongodb server");
	    }
	    console.log(results.ops);
	})


	// db.close();
})