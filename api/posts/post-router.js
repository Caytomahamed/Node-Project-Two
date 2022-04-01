const express = require('express');

// You will need `posts-model.js`
// The middleware functions also need to be required

const router = express.Router();

router.get('/', (req, res) => {
    // RETURN AN ARRAY WITH ALL THE POSTS
  });
  
  router.get('/:id', (req, res) => {
    // RETURN THE POST OBJECT
  });

  router.get('/:id/posts', (req, res) => {
    // RETURN THE ARRAY OF USER POSTS
    // this needs a middleware to verify user id
  });
  

  router.post('/:id/posts', (req, res) => {
    // RETURN THE NEWLY CREATED USER POST
    // this needs a middleware to verify user id
    // and another middleware to check that the request body is valid
  });

  router.put('/:id', (req, res) => {
    // RETURN THE FRESHLY UPDATED POST OBJECT
    // and another middleware to check that the request body is valid
  });

    router.delete('/:id', (req, res) => {
    // RETURN DELETED POST OBJECT
  })
  