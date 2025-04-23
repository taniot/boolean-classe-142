import { createContext, useState, useEffect, useContext } from "react";

const TodoContext = createContext();

// export default TodoContext;

//componente TodoProvider
export function TodoProvider({ children }) {

  const [todos, setTodos] = useState([]);

  const getTodos = () => {

    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(json => setTodos(json))

  }

  useEffect(getTodos, []);

  const value = {
    todos: todos,
    setTodos: setTodos,
    size: todos.length
  }

  return <TodoContext.Provider value={value}>
    {children}
  </TodoContext.Provider>

}

//hook useTodo
export function useTodo() {

  // const context = useContext(TodoContext);
  // return context;

  return useContext(TodoContext);

}
