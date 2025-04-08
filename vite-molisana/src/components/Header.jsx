import Logo from './Logo';
import Navbar from './Navbar';

const Header = (props) => {



  const slogan = 'Molisana, pasta sana per tutti!';
  const links = [
    { id: 1, text: 'Home', url: '#', current: false },
    { id: 2, text: 'Prodotti', url: '#', current: true },
    { id: 3, text: 'Chi Siamo', url: '#', current: false },
    { id: 4, text: 'Contatti', url: '#', current: false },
  ];

  // const { slogan, links } = props;


  return (
    <header>
      <Logo slogan={slogan} />
      <Navbar links={links} />
    </header>
  )
}

export default Header