const recipesService = require('../services/recipesService');

// Crear receta
async function createRecipe(req, res) {
    try {
        const recipe = await recipesService.createRecipe(req.body);
        res.status(201).json(recipe);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear receta', error: error.message });
    }
}

// Listar todas las recetas
async function getAllRecipes(req, res) {
    try {
        const recipes = await recipesService.getAllRecipes();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener recetas', error: error.message });
    }
}

// Obtener receta por ID
async function getRecipeById(req, res) {
    try {
        const recipe = await recipesService.getRecipeById(req.params.id);
        if (!recipe) return res.status(404).json({ message: 'Receta no encontrada' });
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener receta', error: error.message });
    }
}

// Actualizar receta
async function updateRecipe(req, res) {
    try {
        const updatedRecipe = await recipesService.updateRecipe(req.params.id, req.body);
        if (!updatedRecipe) return res.status(404).json({ message: 'Receta no encontrada' });
        res.json(updatedRecipe);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar receta', error: error.message });
    }
}

// Eliminar receta
async function deleteRecipe(req, res) {
    try {
        const deleted = await recipesService.deleteRecipe(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Receta no encontrada' });
        res.json({ message: 'Receta eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar receta', error: error.message });
    }
}

// Listar recetas por usuario
async function getRecipesByUser(req, res) {
    try {
        const recipes = await recipesService.getRecipesByUser(req.params.userId);
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener recetas del usuario', error: error.message });
    }
}

module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe,
    getRecipesByUser
};