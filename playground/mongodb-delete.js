const {MongoClient, ObjectId} = require('mongodb');
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err,db) => {
	if(err){
		console.log("Unable to connect to mongodb server");
	}
	console.log("Connected to mongodb server");

    var db =  db.db("TodoApp");

    // db.collection('Todos').deleteMany({text: "some text"}).then((res) =>{
    // 	console.log(res.result)
    // })

    // db.collection('Todos').deleteOne({text: "example"}).then((res) =>{
    // 	console.log(res.result)
    // })

     db.collection('Todos').findOneAndDelete({text: "example"}).then((result) =>{
    	console.log(result);
    })


})