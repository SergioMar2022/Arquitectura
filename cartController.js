// cartController.js

const CartRepository = require('../dao/cartRepository');
const CartDTO = require('../dtos/cartDTO');

const cartRepository = new CartRepository();

class CartController {
  async getCart(req, res, next) {
    try {
      const cartId = req.params.id;
      const cart = await cartRepository.findById(cartId);

      if (!cart) {
        return res.status(404).json({ message: 'Carrito no encontrado' });
      }

      const cartDTO = new CartDTO(cart);

      res.json(cartDTO);
    } catch (error) {
      next(error);
    }
  }

  async createCart(req, res, next) {
    try {
      const cartData = req.body;
      // Validar los datos de entrada
      // ...

      const newCart = await cartRepository.create(cartData);

      const cartDTO = new CartDTO(newCart);

      res.status(201).json(cartDTO);
    } catch (error) {
      next(error);
    }
  }

  async updateCart(req, res, next) {
    try {
      const cartId = req.params.id;
      const cartData = req.body;
      // Validar los datos de entrada
      // ...

      const updatedCart = await cartRepository.update(cartId, cartData);

      const cartDTO = new CartDTO(updatedCart);

      res.json(cartDTO);
    } catch (error) {
      next(error);
    }
  }

  async deleteCart(req, res, next) {
    try {
      const cartId = req.params.id;

      await cartRepository.delete(cartId);

      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CartController;
