const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    subject:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    deadLine:{
        type:String,
        required:true,
    }  
},{
    timestamps:true,
});

const Assignment = mongoose.model("assignment", assignmentSchema);

module.exports = Assignment;