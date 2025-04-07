const Navbar = (props) => {

  const { links } = props;
  return (
    <nav>
      <ul>
        <li><a href={links[0].url} className={links[0].current ? 'active' : ''}>{links[0].text}</a></li>
        <li><a href={links[1].url} className={links[1].current ? 'active' : ''}>{links[1].text}</a></li>
        <li><a href={links[2].url} className={links[2].current ? 'active' : ''}>{links[2].text}</a></li>
        <li><a href={links[3].url} className={links[3].current ? 'active' : ''}>{links[3].text}</a></li>
      </ul>
    </nav>
  )
}

export default Navbar