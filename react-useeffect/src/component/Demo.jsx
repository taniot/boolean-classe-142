import { useEffect } from "react";

const Demo = () => {

  useEffect(() => {
    console.log('Il componenten DEMO è stato montato in pagina');

    return () => {
      console.log('Il componenten DEMO è stato SMONTATO dalla pagina')
    }

  }, [])


  return <>
    Componente Demo
  </>

}

export default Demo;