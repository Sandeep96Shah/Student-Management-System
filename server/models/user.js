const mongoose = require('mongoose');

//how to implement the subject when role is selected as student

const userSchema = new mongoose.Schema({
    role:{
        type:String,
        enum: ["Teacher", "Student"],
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
},{
    timestamps:true
});

const User = mongoose.model('user', userSchema);

module.exports = User;