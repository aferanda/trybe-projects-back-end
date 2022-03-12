const express = require('express');

const router = express.Router();

router.post('/');
router.post('/:id');
router.get('/');
router.get('/:id');

module.exports = router;