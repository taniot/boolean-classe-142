import { useCount } from "../contexts/CountContext";


const ButtonCounter = () => {

  const { setCount } = useCount();

  return <button onClick={() => setCount(count => count + 1)}>Incrementa il contatore</button>
}

export default ButtonCounter;