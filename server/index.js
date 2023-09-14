const express=require("express")
const cors=require("cors")
const connectDB=require("./configDB/config")

const port=5666
const {postRouter}=require("./routers/routers")
const app=express()


app.use(express.json())

// app.use("/",Router)
connectDB()
app.use("/",postRouter)
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})