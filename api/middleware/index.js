const userdb = require("../users/user-model");

const validateUserId = async (req, res, next) => {
  let { id } = req.params;
  const user = await userdb.getById(id);

  if (!user) return res.status(400).json({ message: "id is not exist" });
  req.user = user;
  next();
};

const validateUser = async (req, res, next) => {
  // DO YOUR MAGIC
  let { name } = req.body;
  if (!name)
    return res.status(400).json({ message: "missing required name field" });
  next();
};

const validatePost = (req, res, next) => {
  // DO YOUR MAGIC
  console.log(req);
  let {
    params: { id },
    body: { text, user_id },
  } = req;

  if (!text || !user_id)
    return res.status(400).json({ message: "text or user id are required" });

  next();
};

// do not forget to expose these functions to other modules

//expoe user malidleware
module.exports = {
  validateUserId,
  validateUser,
  validatePost,
};
