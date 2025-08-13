// Importamos el servicio de usuarios
const usersService = require('../services/usersService');

// Crear un nuevo usuario
async function createUser(req, res) {
    try {
        const newUser = await usersService.createUser(req.body);
        res.status(201).json({ message: 'Usuario creado con éxito', data: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear usuario', error: error.message });
    }
}

// Listar todos los usuarios
async function getAllUsers(req, res) {
    try {
        const users = await usersService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuarios', error: error.message });
    }
}

// Obtener un usuario por ID
async function getUserById(req, res) {
    try {
        const user = await usersService.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener usuario', error: error.message });
    }
}

// Actualizar un usuario
async function updateUser(req, res) {
    try {
        const updatedUser = await usersService.updateUser(req.params.id, req.body);
        if (!updatedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario actualizado con éxito', data: updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar usuario', error: error.message });
    }
}

// Eliminar un usuario
async function deleteUser(req, res) {
    try {
        const deleted = await usersService.deleteUser(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json({ message: 'Usuario eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar usuario', error: error.message });
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};