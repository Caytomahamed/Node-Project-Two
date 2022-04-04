const express = require("express");

// You will need `posts-model.js`
// The middleware functions also need to be required
const postDB = require("./post-model.js");
//import mali middleware
const {
  validateUserId,
  validateUser,
  validatePost,
} = require("../middleware/index.js");

const router = express.Router();

router.get("/", async (req, res) => {
  // RETURN AN ARRAY WITH ALL THE POSTS
  try {
    const posts = await postDB.get();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error getting posts" });
  }
});

router.get("/:id", async (req, res) => {
  // RETURN THE POST OBJECT
  try {
    const post = await postDB.getById(req.params.id);
    res.status(200).json(post);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "get one item is failed" });
  }
});

router.get("/:id/posts", validateUserId, async (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
  try {
    const posts = await postDB.getUserIdpost(req.params.id);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: `Error getting users posts ${error}` });
  }
});

router.post("/:id/posts", validateUserId, validatePost, async (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  try {
    const post = await postDB.insert(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "post a post  is failed" });
  }
});

router.put("/:id", validatePost, async (req, res) => {
  // RETURN THE FRESHLY UPDATED POST OBJECT
  // and another middleware to check that the request body is valid
  try {
    const change = await postDB.update(req.params.id, req.body);
    console.log(change);
    res.status(201).json({ id: req.params.id, message: "post updated" });
  } catch (error) {
    res.status(500).json({ message: "update a post is failed" });
  }
});

router.delete("/:id", async (req, res) => {
  // RETURN DELETED POST OBJECT
  try {
    const post = await postDB.remove(req.params.id);
    res.status(200).json({ id: post, message: "post deleted" });
  } catch (error) {
    res.status(500).json({ message: "delete a post is failed" });
  }
});

module.exports = router;
