const express = require('express');
const { createUser, getAllUsers } = require('../controllers/user.controllers');
const userMiddleware = require('../middlewares/user.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', userMiddleware, createUser);
router.get('/', authMiddleware, getAllUsers);

module.exports = router;