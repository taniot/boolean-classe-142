import { useEffect, useState } from "react";
import axios from "axios";
import { defaultEndpoint, defaultPage, endpoints } from "./config/api";


// export default function App() {
//   const [todos, setTodos] = useState([]);

//   function fetchTodos() {
//     console.log('fetch');
//     axios.get("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => setTodos(res.data))
//       .catch(err => console.log(err))
//   }

//   // fetchTodos();

//   useEffect(fetchTodos, [])

//   return (
//     <div>
//       <button onClick={fetchTodos}>Carica Todos</button>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>{todo.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


//https://rickandmortyapi.com/api/character


// const characters = [
//   {
//     id: 1,
//     name: 'Rick'
//   },
//   {
//     id: 2,
//     name: 'Morty'
//   }
// ]


function App() {

  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(defaultPage);

  function loadCharacters() {
    const endpoint = `${defaultEndpoint}${endpoints.character}?page=${page}`;
    axios.get(endpoint)
      .then(result => {
        console.log(result.data.results);
        setCharacters(result.data.results);
      });
  }

  function nextPage() {
    setPage(page => page + 1)
  }

  function prevPage() {
    setPage(page => page - 1);
  }

  //quando carico la pagina o (monto il componente) e quando cambia page
  useEffect(loadCharacters, [page]);



  return (<>
    <h1>Rick and Morty</h1>
    <ul>
      {characters.map(character => <li key={character.id}>{character.name}</li>)}


    </ul>
    <button onClick={prevPage}>Prev</button>
    <button onClick={nextPage}>Next</button>

  </>)
}

export default App;