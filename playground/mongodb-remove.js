const {ObjectId} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((res) => {
// 	console.log(res);
// })

// Todo.findOneAndRemove({_id: '5a9cd7acb3f117fa6e13d2c6'}).then((todo) => {
// 	console.log(todo);
// });

Todo.findByIdAndRemove('5a9cd7acb3f117fa6e13d2c6').then((todo) => {
	console.log(todo);
})