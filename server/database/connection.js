var mongoose=require('mongoose')

module.exports.connectDB=async()=>{
    try{
        mongoose.set('strictQuery', false);
        const connect = await mongoose.connect(process.env.Mongo_DB,{
             useNewUrlParser:true,
             useUnifiedTopology:true
         })
         console.log(`MongoDB connected : ${connect.connection.host}`);
     }
     catch(err){
         console.log(err)
     }
}