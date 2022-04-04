const express = require("express");

// You will need `users-model.js`
// The middleware functions also need to be required
const userDB = require("./user-model.js");
//import mali middleware
const {
  validateUser,
  validateUserId,
  validateUserUpdate,
} = require("../middleware/index.js");
const router = express.Router();

router.get("/", async(req, res) => {
  // RETURN AN ARRAY WITH ALL THE USERS
  try {
    const users = await userDB.get();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: `Error getting Users ${error}` });
  }
});

router.get("/:id", validateUserId, async(req, res) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to verify user id
  try {
    const user = await userDB.getById(req.params.id);
    res.status(200).json(user);
  } catch (erro) {
    res.status.json({ message: "Error getting user" });
  }
});

router.post("/", validateUser, async(req, res) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
  try {
    const user = await userDB.insert(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: `Error to create user ${error}` });
  }
});

router.put("/:id", validateUserId, validateUser, async(req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  try {
    const change = await userDB.update(req.params.id, req.body);
    res.status(201).json({id:change, message: "user updated"});
  } catch (error) {
    res.status(500).json({ message: "Update user is failed" });
  }
});

router.delete("/:id", validateUserId,  async(req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
  try {
    const user = await userDB.remove(req.params.id);
    res.status(200).json({id:user , message: "user deleted"});
  } catch (error) {
    res.status(500).json({ message: "delete user is failed" });
  }
});

// do not forget to export the router

module.exports = router;
