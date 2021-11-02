const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type:String, unique:true, required:true, index:true },
  age: { type:Number },
  city:{ type:String }
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
