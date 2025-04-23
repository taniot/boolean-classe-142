import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import { CountProvider } from "./contexts/CountContext";
import { TodoProvider } from "./contexts/TodoContext";


function App() {

  return (
    <TodoProvider>
      <CountProvider>
        <Header />
        <Main />
        <Footer />
      </CountProvider>
    </TodoProvider>
  )
}

export default App
