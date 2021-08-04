const User = require('../models/user');
const bcrypt = require("bcryptjs");
const saltRounds = 10;

async function hashPassword (password) {
    const saltPassword = await new Promise((resolve,reject) => {
        bcrypt.genSalt(saltRounds, function (err, salt){
            if(err){
                reject(err);
            }
            resolve(salt);
        })
    })
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, saltPassword, function(err, hash) {
        if (err) reject(err)
        resolve(hash)
      });
    })
  
    return hashedPassword
  }

module.exports.create = async (req,res) => {
    if(req.body.password != req.body.confirm_password){
        return res.status(200).json({
            message:"password doesn't match",
        });
    }
    User.findOne({email:req.body.email},async (err,user)=>{
        if(err){
            return res.status(400).json({
                message:"error in creating the account for the user",
            });
        }
        if(!user){
            let hidePassword = await hashPassword(req.body.password);
            console.log("hidePassword",hidePassword);
            let account = await User.create({
                role:req.body.role,
                subject:req.body.subject,
                name:req.body.name,
                email:req.body.email,
                password:hidePassword,
            })
            console.log("account",account);
            return res.status(200).json({
                data:account,
                message:"Account created successfully",
            })
        }else{
            return res.status(200).json({
                message:"User Account already exists",
            })
        }
    })
}