const Assignment = require('../models/assignment');

module.exports.create = (req,res) => {
    console.log("user",req.user);
    console.log("body",req.body);
     Assignment.create({
         teacher:req.body.teacher,
         subject:req.body.subject,
         description:req.body.description,
         deadLine:req.body.deadLine,
         date:new Date().toDateString(),
     }, (err, task)=> {
        if(err){
            console.log("Error while creating the assignment",err);
            return;
        }
        console.log("task", task);
        return res.status(200).json({
            data:task,
            message:"Assignment Created Successfully",
        })
    });
    
}