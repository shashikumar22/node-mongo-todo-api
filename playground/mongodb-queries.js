const {ObjectId} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

var id = "3a9c2f319c17400c3c2e2f6b";

if(!ObjectId.isValid(id)){
  console.log('Id not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log(todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('todo by findOne', todo);
})

Todo.findById(id).then((todo) => {
  if(!todo){
    return console.log('Id not found');
  }
  console.log('todo by findOne', todo);
}).catch((e) => console.log(e));

User.findById('5a9a9ee21408f512fcbd0f7e').then((user) => {
  if(!user){
    return console.log("Id not found");
  }
  console.log("User ", user);
}, (e) =>{
  console.log(e);
})