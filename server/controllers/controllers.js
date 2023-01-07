const taskmodel=require('../models/taskmodel')
const usermodel=require('../models/usermodel')
const deletemodel=require('../models/deletedtasks')
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
                    //res.send({signed:true})
                    res.redirect('/')
                })
                .catch((err)=>{
                    res.status(500).send({
                        message : err.message || "Some error occurred while creating a create operation"
                    });
                })
    }
    else{
        //res.send({signed:false})
        res.render('signup',{status:true})
    }
}


exports.login=async(req,res,next)=>{
    let username=req.body.username
    let password=req.body.password
    const user = await usermodel.findOne({ username: username,password:password });
    if (!user) {
        //res.send({login:false})
      res.render('index',{status:true})
    }
    else{
        //res.send({user:user,login:true})
        console.log(user);
        res.redirect('/home')
    }
}
exports.addtask=(req,res)=>{
    const task=new taskmodel({
        taskname:req.body.taskname,
        priority:req.body.priority,
        completed:false,
        cancelled:false
    })

    task.
        save()
        .then((result)=>{
            res.redirect('/home')
        })
        .catch((err)=>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        })
}

exports.alltasks=async function(req, res, next) {
    const alltasks=await taskmodel.find()
       /* res.render('home',{tasks:alltasks,pendingtasks:pendingtasks,completedtasks:completedtasks
            ,cancelledtasks:cancelledtasks,deletedtasks:deletedtasks,
        pendingcount:pendingtasks.length,
        completedcount:completedtasks.length,
        cancelledcount:cancelledtasks.length,
        deletedcount:deletedtasks.length
    })*/
    
      res.send(alltasks)
}

exports.report=async(req,res)=>{
    const pendingtasks=await  taskmodel.find({completed:false,cancelled:false})
    const completedtasks=await taskmodel.find({completed:true})
    const cancelledtasks=await taskmodel.find({cancelled:true})
    const deletedtasks=await deletemodel.find()
    let report={
        pendingtasks:pendingtasks,
        completedtasks:completedtasks,
        cancelledtasks:cancelledtasks,
        deletedtasks:deletedtasks
    }
    res.send(report)
}

exports.completetask=(req,res)=>{
    id=req.params.id

    taskmodel.findByIdAndUpdate(id,{completed:true})
        .then((data)=>{
            res.redirect('/home')
        })

}
exports.canceltask=(req,res)=>{
    id=req.params.id
    taskmodel.findByIdAndUpdate(id,{cancelled:true})
        .then((data)=>{
            res.redirect('/home')
        })

}
exports.deletetask=(req,res)=>{
    id=req.params.id
    const del=new deletemodel({
        deleted:id
    })
    del
    .save().then((result)=>{

    })
    taskmodel.findByIdAndDelete(id)
        .then((data)=>{
            res.redirect('/home')
        })

}

