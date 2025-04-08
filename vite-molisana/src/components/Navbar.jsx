const Navbar = (props) => {

  const { links } = props;
  return (
    <nav>
      <ul>
        {links.map((link) => {
          return <li key={link.id}>
            <a href={link.url} className={link.current ? 'active' : ''}>{link.text}</a>
          </li>
        })}
      </ul>
    </nav>
  )
}

export default Navbar

