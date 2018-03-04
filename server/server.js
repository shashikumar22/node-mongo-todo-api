var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
var app = express();

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	console.log(req.body)
	var newTodo = new Todo({
		text: req.body.text
	});

	newTodo.save().then((docs) => {
		res.send(docs);
	}, (e) => {
		res.status(400).send(e);
	})
});

app.get('/todos',(req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	})
});

app.get('/todos/:id', (req,res) => {
	var id = req.params.id;
	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	Todo.findById(id).then((todo) => {
		if(!todo){
			res.status(404).send();			
		}
		res.status(200).send({todo});
	}).catch((e) =>{
		res.status(400).send();
	})
})

app.listen(3000, () => {
	console.log("connecting to port 3000")
});

module.exports = {app};
