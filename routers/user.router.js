const express = require('express');
const { create } = require('../controllers/user.controllers');

const router = express.Router();

router.post('/', create);
router.get('/');

module.exports = router;