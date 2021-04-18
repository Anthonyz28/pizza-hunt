const router = require('express').Router();

const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controllers');

// Set up Get all and Post at /api/pizzas
router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

// Set up Get one, put and Delete at /api/pizza/:id
router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

module.exports = router;