const express = require("express");
const router = express.Router();
const posts = require("../controller/posts");

router.route("/getposts").get(posts.getPost);
router.route("/insertpost").post(posts.insertPost);
router.route("/updateposts/:id").put(posts.updatePost);
router.route("/deletepost/:id").delete(posts.deletePost);

module.exports = router;
