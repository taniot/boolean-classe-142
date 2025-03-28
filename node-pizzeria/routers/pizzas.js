const express = require('express');
const router = express.Router();
const pizze = require('../data/menu.js');
//PIZZE


//index
router.get('/', (req, res) => {
  res.send('Lista delle pizze');
})

//show 
//127.0.0.1/pizzas/id
// router.get('/pizzas/id')
//127.0.0.1/pizzas/qualunquecosa
router.get('/:id', (req, res) => {
  // res.send(`Dettagli della pizza con id ${req.params.id}`)
  const { id } = req.params;
  res.send(`Dettagli della pizza con id ${id}`);
})

//store
router.post('/', (req, res) => {
  res.send(`Aggiungo una nuova pizza `);
})

//update
router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Modifica integrale della pizza con id ${id}`);
})

//modify
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Modifica parziale della pizza con id ${id}`);
})

//destroy
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Eliminazione della pizza con id ${id}`);
})

module.exports = router;