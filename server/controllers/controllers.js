const taskmodel=require('../models/taskmodel')
const usermodel=require('../models/usermodel')
const bcrypt = require("bcrypt")
exports.signup=async (req,res)=>{

    console.log(req.body);
    if(req.body.password === req.body.cpassword){ //checking password and confirm password
        
        
        const user=new usermodel({
            username:req.body.username,
            password:req.body.password
        })
        
        user
                .save()
                .then((result)=>{
                    res.redirect('/')
                })
                .catch((err)=>{
                    res.status(500).send({
                        message : err.message || "Some error occurred while creating a create operation"
                    });
                })
    }
    else{
        res.render('signup',{status:true})
    }
}


exports.login=async(req,res,next)=>{
    let username=req.body.username
    let password=req.body.password
    const user = await usermodel.findOne({ username: username,password:password });
    if (!user) {
      res.render('login',{status:true})
    }
    else{
        console.log(user);
        res.redirect('/home')
    }
}