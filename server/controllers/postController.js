 const Post = require("../models/postModels")
module.exports={
    createPost:async(req,res)=>{
    try {
        const post=new Post(req.body)
        await post.save()
        res.status(201).send({msg:"post created",post})
    } catch (error) {
        res.status(500).send(error)
    }
},
    getPost:async(req,res)=>{
        try {
            const data = await Post.find({})
            res.status(200).send({msg:"ok",data})
        } catch (error) {
            res.status(500).send(error)
        }
    },
    deletePost:async(res,req)=>{
        try {
            const data=await Post.findByIdAndRemove({_id:req.params.id})
            res.status(201).send({msg:"post deleted",data})
        } catch (error) {
            res.status(500).send(error)
        }
    },
    updatePost:async(req,res)=>{
       try {
        await Post.findByIdAndUpdate({_id:req.params.id},{$set:req.body})
        const data=await Post.findById({_id:req.params.id})
        res.status(202).send({msg:"post updated",data})
       } catch (error) {
        res.status(500).send(error)
       }
    }
}
