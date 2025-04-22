const pizze = require('../data/pizze.js');

//CRUD

function index(req, res, next) {

  let filteredPizzas = pizze;

  console.log(req.query);
  // edoardo.get();
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
    res.json({
      error: 'Not Found',
      message: 'Pizza non trovata'
    });
    return;

  }

  res.json(pizza);
}

//post
function store(req, res) {

  // console.log(req.body);

  /*
//richiesta non valida
if(!req.body){
  return res.json({
    value: "richiesta non valida"
  })
}



  */

  //prendo l'ultimo elemento nell'array pizze, leggo il suo id e aggiungo 1;
  //const newId = pizze[pizze.length - 1].id + 1;
  // const newId = pizze.at(-1).id + 1;

  // const newPizza = {
  //   id: newId,
  //   name: req.body.name,
  //   image: req.body.image,
  //   ingredients: req.body.ingredients,
  // }
  const id = pizze.at(-1).id + 1;
  const { name, image, ingredients } = req.body;

  // const newPizza = {
  //   id: id,
  //   name: name,
  //   image: image,
  //   ingredients: ingredients
  // }

  const newPizza = {
    id,
    name,
    image,
    ingredients
  }


  // console.log(newPizza);


  pizze.push(newPizza);

  console.log(pizze);


  //['a', 'b', 'c', 'd'];
  //[0, 1, 2, 3]


  // res.send(`Aggiungo una nuova pizza `);
  // res.status(201);
  res.status(201).json(newPizza);
  // res.json(newPizza);


}

//put
function update(req, res) {

  const id = parseInt(req.params.id);

  console.log(id);

  const pizza = pizze.find(pizza => pizza.id === id);
  // const pizza = pizze.find(pizza => pizza.id === id);

  if (!pizza) {

    res.status(404);

    return res.json({
      status: 404,
      error: "Not Found",
      message: "Pizza non trovata"
    })

  }

  console.log(pizza);

  pizza.name = req.body.name;
  pizza.image = req.body.image;
  pizza.ingredients = req.body.ingredients;

  console.log(pizza);


  res.json(pizza);
}

//patch
function modify(req, res) {
  const id = parseInt(req.params.id);

  console.log(id);

  const pizza = pizze.find(pizza => pizza.id === id);
  // const pizza = pizze.find(pizza => pizza.id === id);

  if (!pizza) {

    res.status(404);

    return res.json({
      status: 404,
      error: "Not Found",
      message: "Pizza non trovata"
    })

  }

  if (req.body.name) {
    pizza.name = req.body.name;//modifico il nome
  }

  if (req.body.image) {
    pizza.image = req.body.image;
  }

  if (req.body.ingredients) {
    pizza.ingredients = req.body.ingredients;
  }

  res.json(pizza);

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







/*

FORM HTML
e.preventDefault();

//nomeCampo.value

const pizza = {
  id: nomeCampoID,
  nome: nomeCampoNome
}

axios.post('/' { params: pizza })




*/