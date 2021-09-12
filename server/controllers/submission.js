const Submission = require('../models/submission');

module.exports.create = async (req,res)=> {
   try{
    console.log("user",req.user);
    console.log("1", JSON.stringify(req.body));
    console.log("2", req.file);
     let submit = await Submission.create({
         student:req.body.student,
         assignment:req.body.assignment,
         date:new Date().toDateString(),
         file:JSON.stringify(req.file),
     });
     console.log("submit",submit);
     if(!submit){
         console.log("error while submitting the assignment");
         return;
     }
     return res.status(200).json({
         data:submit,
         message:"Assignment submitted successfully",
     })
   }catch(err){
        return res.status(500).json({
            message:"Error while creating the assignment from server",
            data:err,
        })
   }
}