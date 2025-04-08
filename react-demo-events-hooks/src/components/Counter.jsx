// import sayHello from "../utils/sayHello";

// const Counter = ({ message, children, classInfo }) => {

//   let counter = 0;

//   const addNumber = () => {
//     console.log('ho cliccato');
//     counter++; //counter = counter + 1
//     console.log(counter);

//     //button.textContent = Incrementa + counter
//   }


//   return <>
//     {/* <button onClick={() => sayHello(5)}>{children}</button>
//     <button onClick={() => sayHello(10)}>{children}</button> */}

//     <button onClick={addNumber}>Incrementa {counter}</button>



//   </>

//   // return <button className={classInfo} onClick={() => alert(message)}>{children}</button>
// }

import { useState, use } from "react";

console.log('Sono fuori dal componente');

const Counter = () => {


  const [count, setCount] = useState(0);

  //[0, fn] //al primo caricamento del componente;

  // const mySetCount = () => {
  //   setCount(prev => prev + 1);
  //   setCount(count + 1);

  // }


  return <>
    <div>{count}</div>
    <button onClick={() => setCount(prev => prev + 1)}>Incrementa!</button>
    <button onClick={() => setCount(prev => prev - 1)}>Decrementa!</button>
  </>

}

export default Counter;



// function demoUseState(val){


//   return [val, () => {}]
// }