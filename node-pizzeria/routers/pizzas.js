const express = require('express');
const router = express.Router();

const pizzaController = require('../controllers/pizzaController.js');

//index
router.get('/', pizzaController.index);
//show 
router.get('/:id', pizzaController.show);
//store
router.post('/', pizzaController.store);
//update
router.put('/:id', pizzaController.update);
//modify
router.patch('/:id', pizzaController.modify);
//destroy
router.delete('/:id', pizzaController.destroy);

module.exports = router;