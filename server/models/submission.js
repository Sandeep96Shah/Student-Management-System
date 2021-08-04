const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    assignment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Assignment",
    },
    file:{
        type:String,
        //required:true,
    },
    date:{
        type:String,
        //required:true,
    },
    evalution:{
        type:String,
        default:"Pending",
        enum:["Pending", "Evaluated"],
        //required:true,
    },
    marks:{
        type:Number,
        default:0,
    }
},{
    timestamps:true,
});

const Submission = mongoose.model("submission", submissionSchema);

module.exports = Submission;