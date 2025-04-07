const ProductCard = (props) => {

  const product = props.product;

  return (
    <div className="prod-card">
      <img src={product.src} alt={product.title} />
      <h3>{product.title}</h3>
    </div>
  )
}

export default ProductCard