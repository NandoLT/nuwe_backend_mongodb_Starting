const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type:String, unique:true, required:true, index:true },
  age: { type:Number },
  city:{ type:String }
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
