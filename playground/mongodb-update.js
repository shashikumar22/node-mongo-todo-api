const {MongoClient, ObjectId} = require('mongodb');
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err,db) => {
	if(err){
		console.log("Unable to connect to mongodb server");
	}
	console.log("Connected to mongodb server");

  var db =  db.db("TodoApp");
  // db.collection('Todos').findOneAndUpdate({
  // 	text: "example"
  // },{
  // 	$set:{
  // 		completed: true
  // 	}
  // },{
  // 	returnOriginal: false
  // }).then((result) => {
  // 	console.log(result);
  // });

    db.collection('Users').findOneAndUpdate({
	  	_id: new ObjectId("5a9a9ee21408f512fcbd0f7e")
	  },{
	  	$inc:{
	  		age: 2
	  	}
	  },{
	  	returnOriginal: false
	  }).then((result) => {
	  	console.log(result);
	  });


})