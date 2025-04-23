import TodoList from "./TodoList";
import { useCount } from "../contexts/CountContext";
// import { useContext } from "react";
// import TodoContext from "../contexts/TodoContext";

const Main = () => {

  //invocazione della funzione che restituisce i valori del contesto selezionato: CountContext
  // const value = useContext(CountContext);
  // const { todos } = useContext(TodoContext)

  const value = useCount();

  return <main>
    <TodoList />
    <div>Il contatore vale {value.count}</div>
  </main>
}


export default Main;