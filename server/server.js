var express = require('express');
var bodyParser = require('body-parser');
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

app.listen(3000, () => {
	console.log("connecting to port 3000")
});

module.exports = {app};
