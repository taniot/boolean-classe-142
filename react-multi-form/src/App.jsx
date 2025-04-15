import { useState } from "react"

function App() {

  // const [pizzaName, setPizzaName] = useState('');
  // const [pizzaPrice, setPizzaPrice] = useState(0);

  // function handlePizzaName(event) {
  //   console.log('cambiando il nome della pizza');
  //   setPizzaName(event.target.value)
  // }

  // function handlePizzaPrice(event) {
  //   console.log('cambiando il prezzo della pizza');
  //   // console.log(event);
  //   console.log(event.target.value);
  //   setPizzaPrice(event.target.value)
  // }

  const [menuPizze, setMenuPizze] = useState([]);
  const [error, setError] = useState(null);

  const [formPizza, setFormPizza] = useState({
    title: 'DEMO',
    price: 10,
    ingredients: [],
    available: false
  });

  function handlePizza(event) {

    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    if (event.target.type === 'number') {
      value = parseInt(value);
    }

    // if (event.target.name === 'ingredients') {
    //   value =
    // }

    /*
    if (event.target.type === 'number' && price && price < 0) {
    setError('Prezzo non valido');
    }

    */


    setFormPizza(formPizza => ({
      ...formPizza,
      [event.target.name]: value
    }))

    // console.log(event.target);
    // console.log(event.target.name);
    // console.log(event.target.type);
    // console.log(event.target.value);
    // console.log(event.target.checked);

  }

  function savePizza(event) {



    const pizze = [...menuPizze, formPizza];

    setMenuPizze(pizze);

  }





  return (
    <>
      <h1>React Multi Form</h1>


      {/* <div>
        <label htmlFor="pizza-element">Pizza</label>
        <input type="text" id="pizza-element" placeholder="Nome della pizza" value={pizzaName} onChange={handlePizzaName} />
      </div>

      <hr />

      <div>
        <label htmlFor="price-element">Price</label>
        <input type="number" id="price-element" placeholder="Prezzo della pizza" value={pizzaPrice} onChange={handlePizzaPrice} />
      </div> */}


      <form action="" onSubmit={savePizza}>

        <div>
          <label htmlFor="pizza-element">Pizza</label>
          <input type="text" id="pizza-element" placeholder="Nome della pizza" value={formPizza.title} onChange={handlePizza} name="title" />
        </div>

        <hr />


        <div>
          <label htmlFor="ingredients-element">Ingredienti</label>
          <input type="text" id="ingredients-element" placeholder="Ingredienti della pizza" value={formPizza.ingredients} onChange={handlePizza} name="ingredients" />
        </div>

        <hr />

        <div>
          <label htmlFor="price-element">Price</label>
          <input type="number" id="price-element" placeholder="Prezzo della pizza" value={formPizza.price} onChange={handlePizza} name="price" />
        </div>

        <hr />

        <div>
          <label htmlFor="available-element">Available</label>
          <input type="checkbox" id="available-element" checked={formPizza.available} onChange={handlePizza} name="available" />
        </div>


        <button>Salva la pizza</button>
      </form>

      <hr />


      <section>
        <h2>
          Dati della pizza in aggiornamento
        </h2>
        <p>Title: {formPizza.title}</p>
        <p>Ingredients: {formPizza.ingredients}</p>
        <p>Price; {formPizza.price} €</p>
        <p>Available: {formPizza.available ? <div>Disponibile</div> : <div>Non disponibile</div>}</p>
      </section>

      <hr />


      <section>
        <h2>
          Menu
        </h2>
        <ul>
          {menuPizze.length ? menuPizze.map((pizza, index) => <li>{pizza.title}</li>) : <li>Pizze non trovate</li>}
        </ul>

      </section>

    </>
  )
}

export default App
