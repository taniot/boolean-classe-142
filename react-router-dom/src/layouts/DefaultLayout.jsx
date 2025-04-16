import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header"

const DefaultLayout = () => {
  return <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />

  </>
}

export default DefaultLayout;