 const mongoose=require("mongoose")

 const Post=new mongoose.Schema({
    title:String,
     image:String,
     rating:Number
 })


module.exports = mongoose.model("Post", Post)