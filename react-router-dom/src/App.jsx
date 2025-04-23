import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import DefaultLayout from "./layouts/DefaultLayout";
import CustomerService from "./pages/CustomerService";
import ProductsLayout from "./layouts/ProductsLayout";
import Products from "./pages/Products";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" Component={Home} /> */}
          <Route path="/chi-siamo" element={<About />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App








  */