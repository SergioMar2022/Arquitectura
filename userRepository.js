// userRepository.js

const User = require('../models/User');

class UserRepository {
  async findById(id) {
    // Implementación para buscar un usuario por su ID
  }

  async findByEmail(email) {
    // Implementación para buscar un usuario por su correo electrónico
  }

  async create(user) {
    // Implementación para crear un nuevo usuario
  }

  async update(user) {
    // Implementación para actualizar un usuario existente
  }

  async delete(id) {
    // Implementación para eliminar un usuario
  }
}

module.exports = UserRepository;
