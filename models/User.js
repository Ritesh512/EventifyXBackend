const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isDeleted : {
    type: Boolean,
    default: false
  },
  friends: [
    {
      friendId: {
        type: String,
        ref: 'User', // Reference to the User model
        required: true
      },
      name: {
        type: String,
      }
    }
  ]
});

userSchema.methods.matchPassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword , this.password);
}


userSchema.pre('save',async function(next){
 if(!this.isModified('password')){
     next();
 }
 const salt = await bcrypt.genSalt(10);
 this.password = await bcrypt.hash(this.password , salt);
})


const User = mongoose.model('User', userSchema);

module.exports = User;
