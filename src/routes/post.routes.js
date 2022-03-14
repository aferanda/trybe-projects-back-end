const express = require('express');
const postMiddleware = require('../middlewares/post.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const { createPost } = require('../controllers/post.controllers');

const router = express.Router();

router.post('/', authMiddleware, postMiddleware, createPost);
router.post('/:id');
router.get('/');
router.get('/:id');

module.exports = router;