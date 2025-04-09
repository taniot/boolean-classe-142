
import { useState } from "react"

// function App() {

//   const [firstName, setFirstName] = useState('Gaetano');
//   const [lastName, setLastName] = useState('Frascolla');




//   const updateField = event => {

//     console.log(event);
//     console.log(event.target);

//     setFirstName(event.target.value)

//   }

//   const handleSubmit = event => {
//     event.preventDefault();
//     console.log(firstName);
//     console.log(lastName);

//   }



//   return (
//     <>
//       <h1>Demo Form</h1>
//       {firstName} {lastName}
//       <hr />
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={firstName}
//           onChange={updateField}
//         />

//         <hr />
//         <input
//           type="text"
//           value={lastName}
//           onChange={event => setLastName(event.target.value)}
//         />

//         <hr />

//         <button>Invia il form</button>
//       </form>
//     </>
//   )
// }

function App() {

  const [tasks, setTasks] = useState(['Mangiare la pizza']);
  const [newTask, setNewTask] = useState('');

  const addNewTask = event => {
    event.preventDefault();

    console.log(newTask);
    //NON FUNZIONA
    // tasks.push(newTask)
    // setTasks(tasks);
    // console.log(tasks);

    // const pippo = [];
    // tasks.forEach(task => pippo.push(task));

    //versione verbosa
    // const pippo = [...tasks, newTask]
    // setTasks(pippo);

    setTasks([...tasks, newTask]);
    setNewTask('');


  }


  const deleteTask = (indexToDelete) => {
    console.log('elimina');
    console.log(indexToDelete);

    const newArray = tasks.filter((task, index) => indexToDelete !== index)
    setTasks(newArray);

    // ['Gaetano', 'Luca', 'Francesco'];

    // ['Gaetano', 'Luca', 'Francesco'].filter(element => element !== 'Gaetano'); //['Luca', 'Francesco']




  }



  return (

    <>
      <h1>Todo List</h1>

      <hr />
      <ul>
        {tasks.map((task, index) => <li key={index}>

          <h3>{task}</h3>
          <button onClick={() => deleteTask(index)}>Elimina</button>
        </li>)}
      </ul>


      <hr />
      <form onSubmit={addNewTask}>


        <input type="text" value={newTask} onChange={event => setNewTask(event.target.value)} />
        <button>Aggiungi nuova task</button>
      </form>



    </>


  )


}


export default App



/*

const [array, setArray] = useState([1,2,3,4,5])

array =[1,2,3,4,5]

array.push(6); => [1,2,3,4,5,6];

[] = [1,2,3,4,5,6]


stringhe
numeri
valori booleani

Gaetano

Gaetano





*/