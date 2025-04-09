const Card = ({ item }) => {


  if (!item) {
    return <div>Nessun linguaggio selezionato da CARD</div>
  }


  const title = item.title;
  const description = item.description;

  return <div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>


}

export default Card;
