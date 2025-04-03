const express = require('express');
const router = express.Router();
const birre = require('../data/birre.js');

const enrico = require('../middlewares/enrico.js');

router.use(enrico);


//Birre


//index
router.get('/', (req, res) => {
  // res.send('Lista delle birre');
  res.json(birre);
})

//show 
//127.0.0.1/birras/id
// router.get('/birras/id')
//127.0.0.1/birras/qualunquecosa
router.get('/:id', (req, res) => {
  // res.send(`Dettagli della birra con id ${req.params.id}`)
  const { id } = req.params;
  res.send(`Dettagli della birra con id ${id}`);
})

//store
router.post('/', (req, res) => {
  res.send(`Aggiungo una nuova birra `);
})

//update
router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Modifica integrale della birra con id ${id}`);
})

//modify
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Modifica parziale della birra con id ${id}`);
})

//destroy
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Eliminazione della birra con id ${id}`);
})

module.exports = router;