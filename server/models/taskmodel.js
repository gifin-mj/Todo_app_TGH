var mongoose =require('mongoose')

var taskSchema=new mongoose.Schema({

    taskname:{
        type:String,
        required:true
    },
    priority:{
        type:Number,
        required:true
    },
    completed:{
        type:Boolean,
        required:true
    },
    cancelled:{
        type:Boolean,
        required:true
    }
})

const task=mongoose.model('task',taskSchema)
module.exports=task