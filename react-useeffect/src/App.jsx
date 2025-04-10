import { useEffect, useState } from "react";
import Demo from "./component/Demo";

function App() {

  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const [showDemo, setShowDemo] = useState(true);

  useEffect(() => {
    console.log('sono stato montato');
  }, [])

  useEffect(() => {
    console.log(`Count vale ${count}`);
  }, [count])

  useEffect(() => {
    console.log(`secondCount vale ${secondCount}`);
  }, [secondCount])

  useEffect(() => {
    console.log(`Qualcosa è cambiato`);
  }, [count, secondCount])






  return (
    <>
      <h1>React useEffect</h1>

      <section>
        <h3>Count</h3>
        <div> {count}</div>
        <button onClick={() => setCount(count + 1)}>Incrementa</button>
      </section>

      <section>
        <h3>Second Count</h3>
        <div> {secondCount}</div>
        <button onClick={() => setSecondCount(secondCount + 1)}>Incrementa</button>
      </section>

      {showDemo && <Demo />}

      <button onClick={() => setShowDemo(prev => !prev)}>Toggle Demo</button>


    </>
  )
}

export default App
