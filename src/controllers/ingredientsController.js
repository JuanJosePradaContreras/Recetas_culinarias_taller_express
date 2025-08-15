const ingredientsService = require('../services/ingredientsService');

// Agregar ingrediente
async function addIngredient(req, res) {
    try {
        const ingredient = await ingredientsService.addIngredient(req.params.recipeId, req.body);
        res.status(201).json(ingredient);
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar ingrediente', error: error.message });
    }
}

// Obtener ingredientes de una receta
async function getIngredientsByRecipe(req, res) {
    try {
        const ingredients = await ingredientsService.getIngredientsByRecipe(req.params.recipeId);
        res.json(ingredients);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener ingredientes', error: error.message });
    }
}

// Eliminar ingrediente
async function deleteIngredient(req, res) {
    try {
        const deleted = await ingredientsService.deleteIngredient(req.params.recipeId, req.params.ingredientId);
        if (!deleted) return res.status(404).json({ message: 'Ingrediente no encontrado' });
        res.json({ message: 'Ingrediente eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar ingrediente', error: error.message });
    }
}

// Buscar recetas que contengan un ingrediente
async function searchRecipesByIngredient(req, res) {
    try {
        const recipes = await ingredientsService.searchRecipesByIngredient(req.params.name);
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar recetas', error: error.message });
    }
}

module.exports = {
    addIngredient,
    getIngredientsByRecipe,
    deleteIngredient,
    searchRecipesByIngredient
};