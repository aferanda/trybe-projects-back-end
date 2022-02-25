const express = require('express');
const salesControllers = require('../controllers/sales.controllers');
const salesMiddleware = require('../middlewares/sales.middleware');

const router = express.Router();

router.get('/', salesControllers.getAll);

router.get('/:id', salesControllers.getById);

router.post('/', salesMiddleware, () => {});

router.put('/', salesMiddleware, () => {});

module.exports = router;
