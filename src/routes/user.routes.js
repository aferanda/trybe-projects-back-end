const express = require('express');
const { createUser, getAllUsers, getUserById } = require('../controllers/user.controllers');
const userMiddleware = require('../middlewares/user.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', userMiddleware, createUser);
router.get('/', authMiddleware, getAllUsers);
router.get('/:id', authMiddleware, getUserById);

module.exports = router;