const { ObjectId } = require('mongodb');
const connectDB = require('../config/db');

const COLLECTION = 'users'; // Nombre de la colección en MongoDB

// Crear usuario
async function createUser(userData) {
    const db = await connectDB();
    const result = await db.collection(COLLECTION).insertOne(userData);
    return { _id: result.insertedId, ...userData };
}

// Listar todos los usuarios
async function getAllUsers() {
    const db = await connectDB();
    return db.collection(COLLECTION).find().toArray();
}

// Obtener usuario por ID
async function getUserById(id) {
    const db = await connectDB();
    return db.collection(COLLECTION).findOne({ _id: new ObjectId(id) });
}

// Actualizar usuario
async function updateUser(id, updateData) {
    const db = await connectDB();
    const result = await db.collection(COLLECTION).findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: updateData },
        { returnDocument: 'after' }
    );
    return result.value; // Retorna el usuario actualizado
}

// Eliminar usuario
async function deleteUser(id) {
    const db = await connectDB();
    const result = await db.collection(COLLECTION).deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};