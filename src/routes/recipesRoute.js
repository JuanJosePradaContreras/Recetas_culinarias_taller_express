const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesController');

// Crear una receta nueva
router.post('/', recipesController.createRecipe);

// Obtener todas las recetas
router.get('/', recipesController.getAllRecipes);

// Obtener una receta por su ID
router.get('/:id', recipesController.getRecipeById);

// Actualizar una receta por su ID
router.put('/:id', recipesController.updateRecipe);

// Eliminar una receta por su ID
router.delete('/:id', recipesController.deleteRecipe);

// Obtener todas las recetas de un usuario específico
router.get('/user/:userId', recipesController.getRecipesByUser);

module.exports = router;