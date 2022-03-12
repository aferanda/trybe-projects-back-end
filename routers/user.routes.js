const express = require('express');
const { createUser } = require('../controllers/user.controllers');
const userMiddleware = require('../middlewares/user.middleware');

const router = express.Router();

router.post('/', userMiddleware, createUser);
router.get('/');

module.exports = router;