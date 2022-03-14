const express = require('express');
const postMiddleware = require('../middlewares/post.middleware');
const updatePostMiddleware = require('../middlewares/updatePost.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
} = require('../controllers/post.controllers');

const router = express.Router();

router.post('/', authMiddleware, postMiddleware, createPost);
router.post('/:id');
router.get('/', authMiddleware, getAllPosts);
router.get('/:id', authMiddleware, getPostById);
router.put('/:id', authMiddleware, updatePostMiddleware, updatePost);

module.exports = router;
