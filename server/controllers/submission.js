const Assignment = require('../models/assignment');
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

module.exports.allAssignment = async (req, res) => {
    try{
        const submitted = await Submission.find({student:req.body.student});
        console.log("submitted", submitted);

        const all = await Assignment.find({});
        console.log("all", all);

        const latest=[];

        const result = await all?.map((task) => {
            console.log("id", typeof task.id, typeof task._id);
            const index = submitted.findIndex((latestTask) => latestTask.assignment == task.id);
            console.log("index", index);
            if(index == -1){
                latest.push(task);
            }
        });

        await Promise.all(result);

        return res.status(200).json({
            message:"here is your task to do!",
            all,
            submitted,
            latest,
        })
    }catch(err){
        return res.status(500).json({
            message:"Error while fetching all the assignment from the database",
            data:err,
        })
    }
}

//while student submit the assignment then for changing the submitted and the lastest,
//handle it in frontEnd!!!