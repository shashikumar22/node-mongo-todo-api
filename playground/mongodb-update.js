const {ObjectId} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

var id = "3a9c2f319c17400c3c2e2f6b";

if(!ObjectId.isValid(id)){
  console.log('Id not valid');
}

Todo.remove({}).then((res) => {
	console.log(res);
})