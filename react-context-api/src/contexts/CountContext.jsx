import { createContext, useContext, useState } from "react";

const CountContext = createContext(); //restituisce un oggetto di cui una delle chiavi è Provider


//componente CountProvider
export function CountProvider({ children }) {

  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{ count, setCount }}>
    {children}
  </CountContext.Provider>

}

//hook useCount
export function useCount() {
  const context = useContext(CountContext);
  return context;
}

// export {
//   CountProvider, useCount
// }