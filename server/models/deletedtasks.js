var mongoose =require('mongoose')

var deletedSchema=new mongoose.Schema({

    deleted:{
        type:String,
        required:true
    }})

    const deleted=mongoose.model('del',deletedSchema)
    module.exports=deleted