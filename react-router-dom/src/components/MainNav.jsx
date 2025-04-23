import { Link, NavLink } from "react-router-dom";

const MainNav = () => <nav>
  <ul>
    <li><NavLink to="/">Home Page</NavLink></li>
    <li><NavLink to="/chi-siamo">About</NavLink></li>
    {/* <li><NavLink to="/prodotti">Prodotti</NavLink></li>
    <li><NavLink to="/customer">Customer</NavLink></li> */}
    {/* <li><a href="/">Home - Link HTML</a></li>
    <li> <a href="/chi-siamo">About - Link HTML</a></li> */}
  </ul>

</nav>

export default MainNav;