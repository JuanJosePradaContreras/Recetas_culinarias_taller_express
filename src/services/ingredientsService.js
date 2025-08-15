const { ObjectId } = require('mongodb');
const connectDB = require('../config/db');

// Agregar ingrediente a una receta
async function addIngredient(recipeId, data) {
    const db = await connectDB();
    const ingredient = {
        name: data.name,
        recipeId: new ObjectId(recipeId)
    };
    const result = await db.collection('ingredients').insertOne(ingredient);
    return { _id: result.insertedId, ...ingredient };
}

// Obtener ingredientes de una receta
async function getIngredientsByRecipe(recipeId) {
    const db = await connectDB();
    return await db.collection('ingredients').find({ recipeId: new ObjectId(recipeId) }).toArray();
}

// Eliminar ingrediente
async function deleteIngredient(recipeId, ingredientId) {
    const db = await connectDB();
    const result = await db.collection('ingredients').deleteOne({
        _id: new ObjectId(ingredientId),
        recipeId: new ObjectId(recipeId)
    });
    return result.deletedCount > 0;
}

// Buscar recetas por nombre de ingrediente
async function searchRecipesByIngredient(name) {
    const db = await connectDB();

    // Encuentra los ingredientes que coinciden
    const ingredients = await db.collection('ingredients').find({
        name: { $regex: name, $options: 'i' }
    }).toArray();

    if (ingredients.length === 0) return [];

    // Extrae IDs únicos de recetas
    const recipeIds = [...new Set(ingredients.map(ing => ing.recipeId))];

    // Busca recetas con esos IDs
    return await db.collection('recipes').find({
        _id: { $in: recipeIds }
    }).toArray();
}

module.exports = {
    addIngredient,
    getIngredientsByRecipe,
    deleteIngredient,
    searchRecipesByIngredient
};