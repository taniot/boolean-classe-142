const ProductCard = ({ img, title, time, showTime }) => {

  // const product = props.product;

  // const { src, title } = product;

  return (
    <div className="prod-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      {/* {showTime && <h4>Cottura: {time} minuti</h4>} */}
      {showTime === true ? <h4>Cottura: {time} minuti</h4> : null}


    </div>
  )
}

export default ProductCard


