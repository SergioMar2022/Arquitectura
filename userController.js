// userController.js

const UserRepository = require('../dao/userRepository');
const UserDTO = require('../dtos/userDTO');

const userRepository = new UserRepository();

class UserController {
  async getUser(req, res, next) {
    try {
      const userId = req.params.id;
      const user = await userRepository.findById(userId);

      if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      const userDTO = new UserDTO(user);

      res.json(userDTO);
    } catch (error) {
      next(error);
    }
  }

  async createUser(req, res, next) {
    try {
      const userData = req.body;
      // Validar los datos de entrada
      // ...

      const newUser = await userRepository.create(userData);

      const userDTO = new UserDTO(newUser);

      res.status(201).json(userDTO);
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req, res, next) {
    try {
      const userId = req.params.id;
      const userData = req.body;
      // Validar los datos de entrada
      // ...

      const updatedUser = await userRepository.update(userId, userData);

      const userDTO = new UserDTO(updatedUser);

      res.json(userDTO);
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req, res, next) {
    try {
      const userId = req.params.id;

      await userRepository.delete(userId);

      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
