function validateUserId(req, res, next) {
  //DO YOUR MAGIC
  let { id } = req.params;
  console.log(id);
  if (!id) {
    res.status(400).json({ message: "id is required" });
  }
  next();
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  let {name} = req.body;
  if (!name) {
    res.status(400).json({ message: "name is required" });
  }
  next();
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  let {id} = req.params;
  let {text, user_id} = req.body;
  if (!text || !user_id) {
    res.status(400).json({ message: "text or user id are required" });
  }

  next();
}

// do not forget to expose these functions to other modules

//expoe user malidleware
module.exports = {
  validateUserId,
  validateUser,
  validatePost
};