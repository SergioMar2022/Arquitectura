// cartRoutes.js

const express = require('express');
const router = express.Router();

const CartController = require('../controllers/cartController');

const cartController = new CartController();

router.get('/:id', cartController.getCart);
router.post('/', cartController.createCart);
router.put('/:id', cartController.updateCart);
router.delete('/:id', cartController.deleteCart);

module.exports = router;
