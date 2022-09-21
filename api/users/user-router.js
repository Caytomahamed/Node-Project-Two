const express = require("express");

// You will need `users-model.js`
const userDB = require("./user-model.js");

//import mali middleware
const { validateUser, validateUserId } = require("../middleware/index.js");

// server
const router = express.Router();

router.get("/", async (req, res) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  try {
    const users = await userDB.get();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: `could not getting Users ${error}` });
  }
});

router.get("/:id", validateUserId, async (req, res) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
  try {
    res.status(200).json(req.user);
  } catch (erro) {
    res.status.json({ message: "could not getting that user" });
  }
});

router.post("/", validateUser, async (req, res) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
  try {
    const user = await userDB.insert(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: `could not create user ${error}` });
  }
});

router.put("/:id", validateUserId, validateUser, async (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  try {
    const user = await userDB.update(req.params.id, req.body);
    res.status(201).json({ message: "user updated", user });
  } catch (error) {
    res.status(500).json({ message: "Update user is failed" });
  }
});

router.delete("/:id", validateUserId, async (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
  try {
    const user = await userDB.remove(req.params.id);
    res.status(200).json({message: "user deleted", user });
  } catch (error) {
    res.status(500).json({ message: "delete user is failed" });
  }
});

// do not forget to export the router

module.exports = router;
