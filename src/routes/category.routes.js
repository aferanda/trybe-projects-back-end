const express = require('express');
const { createCategory, getAllCategories } = require('../controllers/category.controllers');
const categoryMiddleware = require('../middlewares/category.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', authMiddleware, categoryMiddleware, createCategory);

router.get('/', authMiddleware, getAllCategories);

module.exports = router;