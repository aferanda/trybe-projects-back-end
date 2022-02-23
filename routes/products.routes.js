const express = require('express');
const productsControllers = require('../controllers/products.controllers');

const router = express.Router();

// ADICIONAR A FUNÇÃO
router.get('/products', productsControllers);

module.exports = router;
