const mongoose=require('mongoose');
const connect=async()=>{
    try{
        await mongoose.connect(`mongodb://localhost:27017/RDAcademics`, {useNewUrlParser:true,});
        console.log("DB connected");
    }catch(error){
        console.log(error)

    }
}
module.exports=connect;