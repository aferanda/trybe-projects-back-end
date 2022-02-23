const express = require('express');
const salesControllers = require('../controllers/sales.controllers');

const router = express.Router();

router.get('/', salesControllers.getAll);

module.exports = router;
