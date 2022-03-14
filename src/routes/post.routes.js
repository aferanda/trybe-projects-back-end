const express = require('express');
const postMiddleware = require('../middlewares/post.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const { createPost, getAllPosts } = require('../controllers/post.controllers');

const router = express.Router();

router.post('/', authMiddleware, postMiddleware, createPost);
router.post('/:id');
router.get('/', authMiddleware, getAllPosts);
router.get('/:id');

module.exports = router;