const mongoose=require("mongoose")

const connectDB=async()=>{
  try {
   await  mongoose.connect("mongodb+srv://yasmine:y123@cluster0.y27ddma.mongodb.net/")
    console.log("db is connected")
  } catch (error) {
    console.log(error)
  }
}
module.exports=connectDB