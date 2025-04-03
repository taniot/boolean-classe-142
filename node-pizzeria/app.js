const express = require('express');
const app = express();
const port = 4000;


//middlewares - importazione
const checkTime = require('./middlewares/checkTime.js');
// const enrico = require('./middlewares/enrico.js');
const errorsHandler = require('./middlewares/errorsHandler.js');
const notFound = require('./middlewares/notFound.js');
const salutaPoiAndiamo = require('./middlewares/salutaPoiAndiamo.js');

//routers
const pizzaRouter = require('./routers/pizzas.js');
const birreRouter = require('./routers/beers.js');






app.use(express.static('public'));
// registro il body-parser per "application/json"
app.use(express.json());

// app.use('/pizzas', checkTime);
// app.use(enrico);




app.use('/pizzas', pizzaRouter);
app.use('/beers', birreRouter);

//gestione errori
app.use(errorsHandler);
//saluta poi andiamo
app.use(salutaPoiAndiamo);
//gestione 404
app.use(notFound);


// app.get('/', function (req, res) {
//   console.log('demo richiesta');
//   return res.send('risposta al client');

//   res.send('risposta al client');
// })



app.listen(port, () => {
  console.log('Sono un server attivo sulla porta ' + port);
})

