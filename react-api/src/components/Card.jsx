const Card = ({ person }) => {

  const { name, birth_year, nationality, biography, image, awards } = person;

  return <div>
    <h2>{name}</h2>
    <p>{birth_year}</p>
    <p>{nationality}</p>
    <p>{biography}</p>
    <img src={image} alt={name} />
    <p>{awards}</p>
  </div>
}


export default Card;