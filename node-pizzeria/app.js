const express = require('express');
const pizze = require('./data/menu.js');
const app = express();
const port = 4000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Benvenuto nella nostra pizzeria');
})

app.get('/pizze', (req, res) => {
  res.json(pizze);
})

app.listen(port, () => {
  console.log('Sono un server attivo sulla porta ' + port);
})

