const express = require('express');
const salesControllers = require('../controllers/sales.controllers');

const router = express.Router();

// ADICIONAR A FUNCAO
router.get('/sales', salesControllers);

module.exports = router;
