const User = require('../models/user');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

async function comparePassword(password,hash){
    return await new Promise((resolve,reject) => {
        bcrypt.compare(password, hash, function(err, isMatch){
            if(err){
                reject(err);
            }
            resolve(isMatch);
        })
    })
}

module.exports.sign_in = async (req,res) => {
    User.findOne({email:req.body.email},async (err,user) => {
        if(err){
            console.log("Error in finding the user");
            return;
        }
        if(user){
            let isValid = await comparePassword(req.body.password,user.password);
            if(isValid){
                return res.status(200).json({
                    message:"signed_in done",
                    data: {
                        token: jwt.sign(user.toJSON(), "Iis2G23kZI2Fnfi0wXTLDgxKXk0cIozE", { expiresIn: "1000000" }),
                      },
                });
            }
            return res.status(400).json({
                message:"Error while signing in",
            })
        }
    })
}
