const express = require('express');
const app = express();
const port = 4000;

//routers
const pizzaRouter = require('./routers/pizzas.js');
const birreRouter = require('./routers/beers.js');

app.use(express.static('public'));
// registro il body-parser per "application/json"
app.use(express.json());




app.use('/pizzas', pizzaRouter);
app.use('/beers', birreRouter);

app.listen(port, () => {
  console.log('Sono un server attivo sulla porta ' + port);
})

