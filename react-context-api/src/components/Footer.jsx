import { useCount } from "../contexts/CountContext";
import { useTodo } from "../contexts/TodoContext";
import Button from "./Button";
import ButtonCounter from "./ButtonCount";
// import CountContext from "../contexts/CountContext";
// import { useContext } from "react";

const Footer = () => {

  const { setCount } = useCount();
  const { size } = useTodo();

  return <footer>
    <div>Informazioni Classe 142</div>
    <div>Questo progetto ospita {size} todos</div>
    <ButtonCounter />
    <Button message="Incrementa il contatore" fn={() => setCount(count => count + 1)} />
    <Button message="Stampa ciao in console" fn={() => console.log('ciao')} />
  </footer>
}


export default Footer;