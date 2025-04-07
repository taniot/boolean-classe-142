import Logo from './Logo';
import Navbar from './Navbar';

const Header = (props) => {


  return (
    <header>
      <Logo slogan={props.slogan} />
      <Navbar links={props.links} />
    </header>
  )
}

export default Header