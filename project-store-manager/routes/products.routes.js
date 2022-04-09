const express = require('express');
const productsControllers = require('../controllers/products.controllers');
const productsMiddleware = require('../middlewares/products.middleware');

const router = express.Router();

router.get('/', productsControllers.getAll);

router.get('/:id', productsControllers.getById);

router.post('/', productsMiddleware, productsControllers.create);

router.put('/:id', productsMiddleware, productsControllers.update);

router.delete('/:id', productsControllers.remove);

module.exports = router;
