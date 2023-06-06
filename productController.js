// productController.js

const ProductRepository = require('../dao/productRepository');
const ProductDTO = require('../dtos/productDTO');

const productRepository = new ProductRepository();

class ProductController {
  async getProduct(req, res, next) {
    try {
      const productId = req.params.id;
      const product = await productRepository.findById(productId);

      if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }

      const productDTO = new ProductDTO(product);

      res.json(productDTO);
    } catch (error) {
      next(error);
    }
  }

  async getProducts(req, res, next) {
    try {
      const products = await productRepository.findAll();

      const productsDTO = products.map((product) => new ProductDTO(product));

      res.json(productsDTO);
    } catch (error) {
      next(error);
    }
  }

  async createProduct(req, res, next) {
    try {
      const productData = req.body;
      // Validar los datos de entrada
      // ...

      const newProduct = await productRepository.create(productData);

      const productDTO = new ProductDTO(newProduct);

      res.status(201).json(productDTO);
    } catch (error) {
      next(error);
    }
  }

  async updateProduct(req, res, next) {
    try {
      const productId = req.params.id;
      const productData = req.body;
      // Validar los datos de entrada
      // ...

      const updatedProduct = await productRepository.update(productId, productData);

      const productDTO = new ProductDTO(updatedProduct);

      res.json(productDTO);
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req, res, next) {
    try {
      const productId = req.params.id;

      await productRepository.delete(productId);

      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductController;
``
