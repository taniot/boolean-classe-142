const pizze = require('../data/pizze.js');

//CRUD

function index(req, res) {

  let filteredPizzas = pizze;
  //ricerca per ingrediente
  if (req.query.ingredient) {
    console.log('filtro per ingrediente');

    filteredPizzas = pizze.filter(pizza => pizza.ingredients.includes(req.query.ingredient));
  }


  //limit dei risultati
  if (req.query.limit) {
    console.log(req.query.limit);
    const limit = parseInt(req.query.limit);
    console.log(limit);

    if (!isNaN(limit)) {
      filteredPizzas = filteredPizzas.slice(0, limit);
    }
  }

  res.json(filteredPizzas);

}

function show(req, res) {
  const id = parseInt(req.params.id);
  const pizza = pizze.find(pizza => pizza.id === id);

  if (!pizza) {
    return res.status(404).json({
      error: 'Not Found',
      message: 'Pizza non trovata'
    });
  }

  res.json(pizza);
}

function store(req, res) {
  res.send(`Aggiungo una nuova pizza `);
}

function update(req, res) {
  const { id } = req.params;
  res.send(`Modifica integrale della pizza con id ${id}`);
}

function modify(req, res) {
  const { id } = req.params;
  res.send(`Modifica parziale della pizza con id ${id}`);
}

function destroy(req, res) {
  const id = parseInt(req.params.id);

  console.log(id);

  const pizzaIndex = pizze.findIndex(pizza => pizza.id === id);
  // const pizza = pizze.find(pizza => pizza.id === id);

  if (pizzaIndex < 0) {

    res.status(404);

    return res.json({
      status: 404,
      error: "Not Found",
      message: "Pizza non trovata"
    })

  }

  // pizze.splice(pizze.indexOf(pizza), 1);
  pizze.splice(pizzaIndex, 1);
  console.log(pizze);

  // res.send(`Eliminazione della pizza con id ${id}`);
  res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy }

