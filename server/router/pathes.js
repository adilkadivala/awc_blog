const express = require("express");
const router = express.Router();
const posts = require("../controller/posts");

router.route("/getposts").get(posts.getPost);

module.exports = router;
