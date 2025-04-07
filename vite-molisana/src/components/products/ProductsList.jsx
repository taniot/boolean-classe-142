const ProductsList = () => {

  const products = [
    {
      id: 1,
      src: "https://www.lamolisana.it/wp-content/uploads/2021/04/1-spaghetto-quadrato.jpg",
      title: "N.4 Spaghetto Quadrato Bucato",
      type: "lunga",
      time: 6,
    },
    {
      id: 2,
      src: "https://www.lamolisana.it/wp-content/uploads/2021/04/5-fettuccine.jpg",
      title: "N.5 Fettuccine",
      type: "lunga",
      time: 13,
    },
    {
      id: 3,
      src: "https://www.lamolisana.it/wp-content/uploads/2021/04/6-linguine.jpg",
      title: "N.6 Linguine",
      type: "lunga",
      time: 12,
    },
    {
      id: 4,
      src: "https://www.lamolisana.it/wp-content/uploads/2021/04/7-mezze-linguine.jpg",
      title: "N.7 Mezze Linguine",
      type: "lunga",
      time: 11,
    },
    {
      id: 5,
      src: "https://www.lamolisana.it/wp-content/uploads/2021/04/11-spaghettino-quadrato.jpg",
      title: "n.11 Spaghettino Quadrato",
      type: "lunga",
      time: 9,
    },
    {
      id: 6,
      src: "https://www.lamolisana.it/wp-content/uploads/2021/05/38-mezze-maniche.jpg",
      title: "N.38 Mezze maniche",
      type: "corta",
      time: 12,
    },
    {
      id: 7,
      src: "https://www.lamolisana.it/wp-content/uploads/2021/05/44-sedani.jpg",
      title: "N.44 Sedani",
      type: "corta",
      time: 8,
    },
    {
      id: 8,
      src: "https://www.lamolisana.it/wp-content/uploads/2021/05/49-sedani.jpg",
      title: "N.49 Sedanini",
      type: "corta",
      time: 8,
    },
    {
      id: 9,
      src: "https://www.lamolisana.it/wp-content/uploads/2021/05/53-lumachine.jpg",
      title: "N.53 Lumachine",
      type: "corta",
      time: 12,
    },
    {
      id: 10,
      src: "https://www.lamolisana.it/wp-content/uploads/2021/05/55-chifferi-rigati.jpg",
      title: "N.55 Chifferi rigati",
      type: "corta",
      time: 12,
    },
    {
      id: 11,
      src: "https://www.lamolisana.it/wp-content/uploads/2021/05/58-misto-corto.jpg",
      title: "N.58 Misto corto",
      type: "corta",
      time: 9,
    },
    {
      id: 12,
      src: "https://www.lamolisana.it/wp-content/uploads/2021/06/84-ditale-quadrato.jpg",
      title: "N.84 Ditale Quadrato",
      type: "cortissima",
      time: 12,
    },
  ];


  return (
    <section id="products">
      <h2>Lista prodotti</h2>
      <div className="container card-container">
      </div>
    </section>
  )
}

export default ProductsList