const express = require('express');
const router = express.Router();
const ingredientsController = require('../controllers/ingredientsController');

// Agregar ingrediente a una receta
router.post('/:recipeId', ingredientsController.addIngredient);

// Obtener todos los ingredientes de una receta
router.get('/:recipeId', ingredientsController.getIngredientsByRecipe);

// Eliminar ingrediente de una receta
router.delete('/:recipeId/:ingredientId', ingredientsController.deleteIngredient);

// Buscar recetas por ingrediente
router.get('/search/:name', ingredientsController.searchRecipesByIngredient);

module.exports = router;