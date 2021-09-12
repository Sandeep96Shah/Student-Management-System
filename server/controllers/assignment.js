const Assignment = require('../models/assignment');
const Submission = require('../models/submission');

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

//modification add the all assignment created by the teacher in teacher model
module.exports.allAssignments = async (req,res) => {
    try{

        console.log("allAssignment", req.body);

        const all = await Assignment.find({teacher:req.body._id});
        console.log("all", all);

        const result = [];

        const allStudents =await all?.map(async (each) => {
            
        const ans = await Submission.find({assignment:each._id});
        result.push(ans);
        console.log("calling ans", ans);
        }); 

        await Promise.all(allStudents);

        //see it later when more submission are added(till now its correc but confirm it later!!!)
        const pending = await result[0].filter((task) => task.evalution == "Pending");
        const evaluated = await result[0].filter((task) => task.evalution == "Evaluated");
        
        console.log("allStudents", allStudents);

        return res.status(200).json({
            message:"information about teacher assignment!",
            all,
            //result,
            pending,
            evaluated,
        });

    }catch(err){
        console.log("error while fetching assignments details!", err);
        return res.status(500).json({
            message:"error while fetching assignments details!",
            data:err,
        })
    }
}

module.exports.assignmentEvaluated = async (req, res) => {
    try{
        const updated = await Submission.findOne({student:req.body.student, assignment:req.body.assignment});
        //console.log("updated", updated);
        updated.marks = req.body.marks;
        updated.evalution = "Evaluated";
        updated.save();
        return res.status(200).json({
            message:"updated",
            updated,
        })
    }catch(err){
        console.log("error while evaluating the submitted assignment!", err);
        return res.status(500).json({
            message:"error while evaluating the submitted assignment!",
            data:err,
        })
    }
}