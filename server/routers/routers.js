const router = require("express").Router()
const controllerPost=require("../controllers/postController")

 
// router.get("/api/createPoste", async (req, res) => {
// 	const poste = await poste.find()
// 	res.send(poste)
// })


router.post("/api/create_post",controllerPost.createPost)
router.get("/api/get_post",controllerPost.getPost)
router.delete("/api/delete_post/:id",controllerPost.deletePost)
router.put("/api/update_post/:id",controllerPost.updatePost)

module.exports = {postRouter:router}
