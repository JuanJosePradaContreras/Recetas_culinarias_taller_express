const { ObjectId } = require('mongodb');
const connectDB = require('../config/db');

// Crear receta
async function createRecipe(data) {
    const db = await connectDB();
    const recipe = {
        title: data.title,
        description: data.description,
        userId: new ObjectId(data.userId), // Vincula la receta con el usuario
        createdAt: new Date()
    };
    const result = await db.collection('recipes').insertOne(recipe);
    return { _id: result.insertedId, ...recipe };
}

// Obtener todas las recetas
async function getAllRecipes() {
    const db = await connectDB();
    return await db.collection('recipes').find().toArray();
}

// Obtener receta por ID
async function getRecipeById(id) {
    const db = await connectDB();
    return await db.collection('recipes').findOne({ _id: new ObjectId(id) });
}

// Actualizar receta
async function updateRecipe(id, data) {
    const db = await connectDB();
    const update = { $set: {} };
    if (data.title) update.$set.title = data.title;
    if (data.description) update.$set.description = data.description;

    const result = await db.collection('recipes').findOneAndUpdate(
        { _id: new ObjectId(id) },
        update,
        { returnDocument: 'after' } // Retorna el documento ya actualizado
    );
    return result.value;
}

// Eliminar receta
async function deleteRecipe(id) {
    const db = await connectDB();
    const result = await db.collection('recipes').deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0;
}

// Obtener recetas por usuario
async function getRecipesByUser(userId) {
    const db = await connectDB();
    return await db.collection('recipes').find({ userId: new ObjectId(userId) }).toArray();
}

module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe,
    getRecipesByUser
};