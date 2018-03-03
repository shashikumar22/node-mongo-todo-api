const {MongoClient, ObjectId} = require('mongodb');
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err,db) => {
	if(err){
		console.log("Unable to connect to mongodb server");
	}
	console.log("Connected to mongodb server");

    var db =  db.db("TodoApp");

	db.collection('Todos').find({
		_id: new ObjectId("5a9a8a47db46e73490ad87cd")
	}).toArray().then((docs) => {
		console.log('todos');	
		console.log(docs);
	}, (err) => {
		console.log("unable to fetch Todos");
	})

	db.collection('Todos').find({
		_id: new ObjectId("5a9a8a47db46e73490ad87cd")
	}).count().then((count) => {
		console.log('todos count: '+count);	
	}, (err) => {
		console.log("unable to fetch Todos");
	})

})