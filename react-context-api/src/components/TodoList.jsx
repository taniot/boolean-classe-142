
import { useTodo } from "../contexts/TodoContext";
import TodoCard from "./TodoCard";
// import TodoContext from "../contexts/TodoContext";
// import { useContext } from "react";


const TodoList = () => {

  const { todos } = useTodo();


  return <div>
    Elenco dei todos
    {todos.map(todo => <TodoCard key={todo.id} todo={todo} />)}
  </div>
}


export default TodoList;