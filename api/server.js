const express = require('express');

//import post router vs //impoe user router
const postRouter = require('./posts/post-router.js');
const userRouter = require('./users/user-router.js');

const server = express();

// remember express by default cannot parse JSON in request bodies
server.use(express.json());
// global middlewares and the user's router need to be connected here

// Write all your routes here
server.use("/api/posts", postRouter);
server.use("/api/users", userRouter);

server.use("*", (req, res) => {     
    // this is the catch all route for any other route that is not defined
    res.status(404).json({ message: `${req.method} ${req.baseUrl} Not Found` });
})


module.exports = server;
