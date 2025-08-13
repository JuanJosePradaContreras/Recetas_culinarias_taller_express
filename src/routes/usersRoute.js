const express = require('express');
const router = express.Router();

// Importamos el controlador de usuarios
const usersController = require('../controllers/usersController');

// Rutas para gestión de usuarios
router.post('/', usersController.createUser);          // Crear un nuevo usuario
router.get('/', usersController.getAllUsers);          // Listar todos los usuarios
router.get('/:id', usersController.getUserById);       // Obtener un usuario por ID
router.put('/:id', usersController.updateUser);        // Actualizar usuario por ID
router.delete('/:id', usersController.deleteUser);     // Eliminar usuario por ID

module.exports = router;